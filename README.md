# StackOverflow-lite    [![Build Status](https://travis-ci.org/mmosoroohh/StackOverflow-lite.svg?branch=ft-Endpoints-with-unittests-159718595)](https://travis-ci.org/mmosoroohh/StackOverflow-lite)   [![Coverage Status](https://coveralls.io/repos/github/mmosoroohh/StackOverflow-lite/badge.svg?branch=ft-Endpoints-with-unittests-159718595)](https://coveralls.io/github/mmosoroohh/StackOverflow-lite?branch=ft-Endpoints-with-unittests-159718595)    [![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)
StackOverflow-lite is a platform where people can ask questions and provide answers.

# Usage
- Home page
- Create an account 
- Login into your account
- Post a question
- Fetch all questions
- Fetch a single question
- Edit a specific question
- Delete a specific question
- Post an answer to a question

# Prerequisities
- Python 3.6 or a later version

# Installation
Downlaod / clone the project to your local computer by:
- Download the zip file of this repository.
- Unzip it and navigate into the UI directory.
<pre><code>
$ /StackOverflow-lite
</code></pre>
  

# Alternatively
Run the following command:
<pre><code> $ git clone https://github.com/mmosoroohh/StackOverflow-lite.git </code></pre>
Locate StackOverflow-lite folder in your local computer.
<pre><code>$ cd StackOverflow-lite/ </code></pre>

# Virtual environment
Create a virtual environment
<pre><code> $ virtualenv venv </code></pre>
Activate the environment
<pre><code> $. venv/bin/activate </code></pre>

# Dependencies
Install package requirements to your environment
<pre><code> $ pip install -r requirements.txt </code></pre>

# Env
Create a.env file in your StackOverflow-lite root directory and add:
<pre><code>
$ . venv/bin/activate
$ export FLASK_APP="run.py"
$ export SECRET="any-character-or-STRING-YOU-PREFER"
$ export APP_SETTINGS="development"
</code></pre>

# Testing
To set up testing environment
<pre><code>
$ pip install nose
$ pip install coverage
</code></pre>
To run test perform the following:
<pre><code>
$ nosetests --with-coverage
</code></pre>
# Testing API endpoints
<pre>
<table>
<tr><th>Test</th>
<th>API-endpoint</th>
<th>HTTP-Verbs</th>
</tr>
<tr>
<td>Post a question</td>
<td>/api/v1/questions</td>
<td>POST</td>
</tr>
<tr>
<td>Fetch all question</td>
<td>/api/v1/questions</td>
<td>GET</td>
</tr>
<tr>
<td>Fetch a single question</td>
<td>/api/v1/questions/question_id</td>
<td>GET</td>
</tr>
<tr>
<td>Edit a specific question</td>
<td>/api/v1/questions/question_id</td>
<td>PUT</td>
</tr>
<tr>
<td>Delete a question</td>
<td>/api/v1/questions/questions_id</td>
<td>DELETE</td>
</tr>
<tr>
<td>Post answer to a question</td>
<td>/api/v1/questions/question_id/answers</td>
<td>POST</td>
</tr>
</tr>
</table>
</pre>

# Resources
The API is hosted on [Heroku]()
# Authors
- Arnold M. Osoro - [mmosoroohh](https://github.com/mmosoroohh)

# Acknowledgement
Andela Bootcamp - cohort 31
