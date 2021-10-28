import requests
import json

GITHUB_REPO = "https://github.com/bgullic/test_repo"
AUTH_TOKEN = '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'

def create_issue(url, title, body):
    session = requests.Session()
    url = url.replace('https://github.com/', 'https://api.github.com/repos/') + '/issues'
    data = {'title': title, 'body': body}
    headers= {'Accept': 'application/vnd.github.v3+json', 'Authorization': 'token ' + AUTH_TOKEN, 'Content-Type': 'application/json'}
    result = session.post(url, data=json.dumps(data), headers=headers)
    print(result.json())

create_issue(GITHUB_REPO, "test", "test123")

