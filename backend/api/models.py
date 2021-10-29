from django.db import models


# Create your models here.
class Developer(models.Model):
    username = models.CharField(max_length=256)
    address = models.CharField(max_length=42)


class Project(models.Model):
    title = models.CharField(max_length=100)
    developer = models.ForeignKey(Developer, on_delete=models.CASCADE)


class Issue(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    github_id = models.IntegerField(null=True, default=None)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    address = models.CharField(max_length=42)

    @property
    def raised(self):
        pledges = self.feature_request_pledge_set.all()
        pledge_sum = 0.0
        for pledge in pledges.filter(result=PledgeResult.RECIEVED):
            pledge_sum += pledge.amount
        return pledge_sum

    @property
    def pledged(self):
        pledges = self.feature_request_pledge_set.all()
        pledge_sum = 0.0
        for pledge in pledges:
            pledge_sum += pledge.amount
        return pledge_sum


class IssueComment(models.Model):
    id = models.IntegerField(primary_key=True)
    issue = models.ForeignKey(Project, on_delete=models.CASCADE)
    github_id = models.IntegerField(null=True, default=None)
    comment = models.TextField()


class PledgeResult(models.TextChoices):
    WAITINGFORFUNDS = "F"
    RECIEVED = "R"
    SENTTODEV = "D"
    RETURNEDTOUSER = "U"


class IssuePledge(models.Model):
    id = models.IntegerField(primary_key=True)
    amount = models.FloatField()
    result = models.CharField(max_length=1, choices=PledgeResult.choices, default=PledgeResult.WAITINGFORFUNDS)
    return_address = models.CharField(max_length=42)
    issue = models.ForeignKey(Issue, on_delete=models.CASCADE)
    issue_comment = models.OneToOneField(IssueComment, on_delete=models.CASCADE, null=True)

    @property
    def is_from_comment(self):
        return self.feature_request_comment is not None
