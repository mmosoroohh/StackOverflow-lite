from flask_api import FlaskAPI
from flask import request, jsonify, abort

# local import
from instance.config import app_config

def create_app(config_name):

    app = FlaskAPI(__name__, instance_relative_config=True)
    
    users = []
    questions = []
    answers = []


    @app.route('/api/v1/auth/signup', methods=['POST'])
    def signup():
        # Register a user
        user = {'id': len(users)+1,
            'name': request.json.get('name'),
            'email': request.json.get('email'),
            'password': request.json.get('password')
        }
        users.append(user)
        return jsonify({'message': 'User successfully registered!', 'User': users}), 201

    @app.route('/api/v1/auth/signin', methods=['POST'])
    def signin():
        email= request.json.get("email")
        password= request.json.get("password")

        if email == "" or password == "":
            return "Please enter all details!"
        user = [user for user in users if user['email'] == email and user['password'] == password]

        if not user:
            return jsonify({'message': 'Your account does not exist, Please Register'})
        return jsonify({'message': 'You have successfully logged In'})
                

    @app.route('/api/v1/questions', methods=['POST'])
    def question():
        # Post a question
        question = {'id': len(questions)+1,
            'Questions': request.json.get('Question'),
            'Date posted': request.json.get('Date posted')
        }
        questions.append(question)
        return jsonify({'Message': "Question successfully created"} ,{'Questions': questions}), 201

    @app.route('/api/v1/questions', methods=['GET'])
    def view_all_questions():
        # retrieve all questions
        return jsonify({'Questions': questions}), 200

    @app.route('/api/v1/questions/<int:id>', methods=['GET'])
    def single_question(id):
        # retrive a question by it's ID
        single_question = [question for question in questions if question['id'] == id]
        if len(single_question) == 0:
            return jsonify({'Message': "No question found"})

        return jsonify({'Questions': single_question}), 200

    @app.route('/api/v1/questions/<int:id>', methods=['PUT'])
    def edit_question(id):
        # Edit a specific question 
        edit_question = [question for question in questions if question['id'] == id]
        if len(edit_question) == 0:
            return jsonify({'Message': "No question found"})
        edit_question = {
            'Question': request.json.get('Question'),
            'Date modified': request.json.get('Date posted')
        }
        return jsonify({'Questions': edit_question}), 200

    @app.route('/api/v1/questions/<int:id>', methods=['DELETE'])
    def delete_question(id):
        # Delete a specific question
        delete_question = [question for question in questions if question['id'] == id]
        if len(delete_question) == 0:
            return jsonify({'Message':"No question found"})

        questions.remove(delete_question[0])

        return jsonify({'Questions': questions}), 200

    @app.route('/api/v1/questions/<int:id>/answers', methods=['POST'])
    def answer_question(id):
        # retrive a question by it's ID
        question = [question for question in questions if question['id'] == id]
        if len(question) == 0:
            return jsonify({'Message': "No question found"})
        # Answer a specific question
        answer_question = {'id': len(answers)+1,
            'Answer': request.json.get('Answer'),
            'Date posted': request.json.get('Date posted')
        }
        answers.append(answer_question)
        return jsonify({'Question': question}, {'Answers': answer_question}), 201


    return app