from rest_framework import serializers

from .models import Issue, IssuePledge


class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ('id', 'title', 'description', 'pledged', 'raised', 'github_id')


class PledgeSerializer(serializers.ModelSerializer):
    issue = serializers.IntegerField()
    issue_comment = serializers.IntegerField()

    class Meta:
        model = IssuePledge
        fields = ('id', 'amount', 'return_address', 'result')
        read_only_fields = ('result')