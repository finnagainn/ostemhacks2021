from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
import requests
import json
from django.http import HttpResponse

from .serializers import IssueSerializer, PledgeSerializer
from .models import Issue, IssuePledge

AUTH_TOKEN = open('token.txt').readline()


# Create your views here.
class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer


class PledgeViewSet(viewsets.ModelViewSet):
    queryset = IssuePledge.objects.all()
    serializer_class = PledgeSerializer

    def create(self, request, *args, **kwargs):
        pledge = IssuePledge.objects.get(id=request.POST.get("id"))
        if pledge.Issue.github_id is not None:
            comment = pledge.issue_comment
            session = requests.Session()
            url = "https://api.github.com/repos/" + pledge.issue.project.developer.username + "/" + pledge.issue.project.title + "/issues" + str(pledge.Issue.github_id) + "/comments"
            data = {'body': comment.comment + "\n\n pledge amount: " + str(pledge.amount) + " ether, not yet funded"}
            headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': 'token ' + AUTH_TOKEN, 'Content-Type': 'application/json'}
            result = session.post(url, data=json.dumps(data), headers=headers)
            comment.github_id = result.json()["id"]
            return HttpResponse(result)
        dev_request = pledge.issue
        session = requests.Session()
        url = "https://api.github.com/repos/" + pledge.issue.project.developer.username + "/" + pledge.issue.project.title + "/issues"
        data = {'title': dev_request.title, 'body': dev_request.description + "\n\n pledge amount: " + str(pledge.amount) + " ether, not yet funded"}
        headers = {'Accept': 'application/vnd.github.v3+json', 'Authorization': 'token ' + AUTH_TOKEN, 'Content-Type': 'application/json'}
        result = session.post(url, data=json.dumps(data), headers=headers)
        dev_request.github_id = result.json()["number"]
        return HttpResponse(result)

