# Generated by Django 3.2.8 on 2021-10-29 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=1000)),
                ('pledged', models.FloatField()),
                ('raised', models.FloatField()),
                ('github_url', models.URLField()),
            ],
        ),
    ]
