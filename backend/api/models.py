from django.db import models

# Create your models here.
class Issue(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    pledged = models.FloatField()
    raised = models.FloatField()
    github_url = models.URLField()

class Donate(models.Model):
    id = models.IntegerField(primary_key=True)


    
