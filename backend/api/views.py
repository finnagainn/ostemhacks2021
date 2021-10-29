from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
import requests
import json
from django.http import HttpResponse

from api.serializers import IssueSerializer, DonateSerializer
from api.models import Issue, Donate

AUTH_TOKEN = open('token.txt').readline()


# Create your views here.

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donate.objects.all()
    serializer_class = DonateSerializer

    def create(self, request):
        dev_request = Issue.objects.get(id=request.POST.get("id"))
        session = requests.Session()
        url = dev_request.github_url.replace('https://github.com/', 'https://api.github.com/repos/') + 'issues'
        data = {'title': dev_request.title, 'body': dev_request.description}
        headers= {'Accept': 'application/vnd.github.v3+json', 'Authorization': 'token ' + AUTH_TOKEN, 'Content-Type': 'application/json'}
        result = session.post(url, data=json.dumps(data), headers=headers)
        return HttpResponse(result)

