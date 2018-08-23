<<<<<<< HEAD
# StackOverflow-lite    [![Build Status](https://travis-ci.org/mmosoroohh/StackOverflow-lite.svg?branch=challenge3)](https://travis-ci.org/mmosoroohh/StackOverflow-lite)   [![Coverage Status](https://coveralls.io/repos/github/mmosoroohh/StackOverflow-lite/badge.svg?branch=challenge3)](https://coveralls.io/github/mmosoroohh/StackOverflow-lite?branch=challenge3)(https://coveralls.io/github/mmosoroohh/StackOverflow-lite?branch=challenge3)   [![Maintainability](https://api.codeclimate.com/v1/badges/39632655bf578a5b3aa2/maintainability)](https://codeclimate.com/github/mmosoroohh/StackOverflow-lite/maintainability)   [![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)
=======
# StackOverflow-lite    [![Build Status](https://travis-ci.org/mmosoroohh/StackOverflow-lite.svg?branch=challenge3)](https://travis-ci.org/mmosoroohh/StackOverflow-lite)   [![Coverage Status](https://coveralls.io/repos/github/mmosoroohh/StackOverflow-lite/badge.svg?branch=challenge3)](https://coveralls.io/github/mmosoroohh/StackOverflow-lite?branch=challenge3)   [![Maintainability](https://api.codeclimate.com/v1/badges/39632655bf578a5b3aa2/maintainability)](https://codeclimate.com/github/mmosoroohh/StackOverflow-lite/maintainability)   [![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)
>>>>>>> 169acd22de657bc75cc6e48c74a3581ab1e1b2cd
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
$ source .env
</code></pre>

# Database integration
Create a Database on PostgreSQL:
- stackoverflow_lite (development DB)
- test_stackoverflow (testing DB)

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
<td>SignUp a user</td>
<td>/api/v2/auth/signup</td>
<td>POST</td>
</tr>
<tr>
<td>SignIn a user</td>
<td>/api/v2/auth/signin</td>
<td>POST</td>
</tr>
<tr>
<td>Post a question</td>
<td>/api/v2/users/questions</td>
<td>POST</td>
</tr>
<tr>
<td>Fetch all question</td>
<td>/api/v2/users/questions</td>
<td>GET</td>
</tr>
<tr>
<td>Fetch a single question</td>
<td>/api/v2/users/questions/question_id</td>
<td>GET</td>
</tr>
<tr>
<td>Edit a specific question</td>
<td>/api/v2/users/questions/question_id</td>
<td>PUT</td>
</tr>
<tr>
<td>Delete a question</td>
<td>/api/v2/users/questions/questions_id</td>
<td>DELETE</td>
</tr>
<tr>
<td>Post answer to a question</td>
<td>/api/v2/users/questions/question_id/answers</td>
<td>POST</td>
</tr>
<tr>
<td>User sign out</td>
<td>/api/v2/auth/signout</td>
<td>POST</td>
</tr>
</tr>
</table>
</pre>

# Resources and Documentation
## API Documentation
The API documentation can be accessed from [Apiary](https://stackoverflowlite5.docs.apiary.io)

# Authors
- Arnold M. Osoro - [mmosoroohh](https://github.com/mmosoroohh)

# Acknowledgement
Andela Bootcamp - cohort 31
