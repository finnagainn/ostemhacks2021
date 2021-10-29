import os

import requests
from celery import shared_task
from web3 import Web3

from .models import Issue, PledgeResult


@shared_task
def check_issue_status():
    feature_requests = Issue.objects.all()
    for fr in feature_requests:
        if fr.completed:
            continue
        request_result = requests.Request(method="get", url="github.com/repos/" + fr.project.developer.username + "/" + fr.project.title + "/issues/" + fr.number)
        if not request_result.json["state"]:
            continue
        pledges = fr.feature_request_pledge_set.all()
        if pledges.filter(result=PledgeResult.WAITINGFORFUNDS).count() > 0:
            txs = requests.Request("GET", "https://api.etherscan.io/api?module=account&action=txlist&address=" + fr.address + "&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=" + os.getenv("ETHERSCAN_API_TOKEN")).json()["result"]
            for tx in txs:
                pledge = pledges.get(result=PledgeResult.WAITINGFORFUNDS, return_address=tx["from"])
                if pledge is not None:
                    pledge.result = PledgeResult.RECIEVED
                    pledge.save()
        web3 = Web3(Web3.HTTPProvider('localhost:8545'))
        print(web3.eth.send_raw_transaction(web3.eth.account.sign_transaction({
            'nonce': web3.eth.getTransactionCount(fr.from_address),
            'to': fr.project.developer.address,
            'value': web3.toWei(fr.raised, 'ether'),
            'gas': 2000000,
            'gasPrice': web3.toWei('50', 'gwei')
        }, fr.ethereum_private_key).rawTransaction))
        for pledge in pledges:
            if pledge.result == PledgeResult.WAITINGFORFUNDS:
                continue
            pledge.result = PledgeResult.SENTTODEV
            pledge.save()
