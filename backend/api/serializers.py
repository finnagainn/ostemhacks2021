from rest_framework import serializers

from api.models import Issue, Donate

class IssueSerializer(serializers.ModelSerializer):
   class Meta:
       model = Issue
       fields = ('id', 'title', 'description', 'pledged', 'raised', 'github_url')

class DonateSerializer(serializers.ModelSerializer):
   class Meta:
       model = Donate
       fields = ('id')