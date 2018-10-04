from flask import Blueprint
from flask_api import FlaskAPI
from flask import request, jsonify, abort, make_response, json, render_template
from flask_jwt_extended import (jwt_required, create_access_token, get_jwt_identity, get_raw_jwt)

from passlib.handlers.bcrypt import bcrypt
from datetime import datetime
from app.helpers import insert_user, get_user, post_question, get_questions, get_question, edit_question, delete_question, get_answer, get_answers, mark_answer, display_questions
from app.models import User, Questions, Answer, Blacklist
from app.validate import validate_email, user_detail_verification
import re
from flask_cors import CORS

from app.app import create_app


web = Blueprint("web",__name__)
CORS(web)


@web.route('/api/v2/auth/signup', methods=['POST'])
def signup_user():
    name = request.json['name'] 
    email = request.json['email']
    user = get_user(request.json.get('email'))

    if user is not None:
        return jsonify({'message': "Email already exists."})

    if user_detail_verification(name):
        return user_detail_verification(name)
    if validate_email(email):
        return validate_email(email)

    user = User(name = request.json.get("name"),
                email = request.json.get("email"),
                password = bcrypt.encrypt(request.json.get("password")))
                       
    user.save()
    return jsonify({'message': 'New user registered!', 'User': user.__dict__}), 201

@web.route('/api/v2/auth/signin', methods=['POST'])
def signin():
    email = request.json.get("email")
    password = request.json.get("password")

    user = get_user(email)
    if user is None:
        return jsonify({"message": "Email not found"}), 404
    elif not bcrypt.verify(password, user['password']):
        return jsonify({'message': "Incorrect password"}), 400
    else:
        token = create_access_token(identity=request.json.get('email'))
        return jsonify({'message': 'Logged in successfully!', 'token': token})
    return make_response('Your account does not exist!, Please Register!'), 401


@web.route('/api/v2/questions', methods=['POST'])
@jwt_required
def question():

    email = get_jwt_identity()
    user = get_user(email)
    # post a single question
    question = Questions(
        question = request.json.get("question"),
        date_posted = datetime.now(),
        user_id = (user["id"]))
    question.save()
    return jsonify({'Question': question.__dict__, 'message': 'Question created successfully!'}), 201

@web.route('/api/v2/questions', methods=['GET'])
@jwt_required
def view_all_questions():
    email = get_jwt_identity()
    user = get_user(email)

    questions = get_questions(user['id'])
    if questions is None:
    # retrieve all questions
        return jsonify({'message': 'No questions found'})
    return jsonify({'Questions': questions}), 200

@web.route('/api/v2/questions/<int:id>', methods=['GET'])
@jwt_required
def single_question(id):
    email = get_jwt_identity()
    user = get_user(email)

    # retrive a question by it's ID
    question = get_question(id)
    if question is None:
        return jsonify({'message': 'Question not available'})

    return jsonify({'Question': question}), 200

@web.route('/api/v2/questions/<int:id>', methods=['PUT'])
@jwt_required
def modify_question(id):
    email = get_jwt_identity()
    user = get_user(email)
    # Edit a specific question 
    edit = get_question(id)

    if edit is None:
        return jsonify({'message': 'Question not available'})

    edit['question'] = request.json.get('question'),
    edit['date_posted'] = datetime.now()

    edit_question(id, edit)

    return jsonify({'Question': edit, 'message': 'Question has been updated!'}), 200

@web.route('/api/v2/questions/<int:id>', methods=['DELETE'])
@jwt_required
def remove_question(id):
    email = get_jwt_identity()
    user = get_user(email)
    # Delete a specific question 
    question = get_question(id)
    if question is None:
        return jsonify({'message': 'Question not available'})

    delete_question(id)
    return jsonify({'message': 'Question has been deleted!'}), 200

@web.route('/api/v2/questions/<int:id>/answers', methods=['POST'])
@jwt_required
def answer_question(id):
    # retrive a question by it's ID
    email = get_jwt_identity()
    user = get_user(email)

    # Answer a specific question
    question = get_question(id)
    
    answers = Answer(
        answer = request.json.get("answer"),
        date_posted = datetime.now(),
        question_id = question['id'],
        user_id = (user["id"]))
    answers.save()
    return jsonify({'Question': question, 'Answer': answers.__dict__}), 201

@web.route('/api/v2/questions/<int:id>/answers', methods=['GET'])
@jwt_required
def view_all_answers(id):
    email = get_jwt_identity()
    user = get_user(email)
    
    question = get_question(id)

    answers = get_answers(id)
    if answers is None:
        return jsonify({'message': 'Answers not found!'})

    return jsonify({'Question':question, 'Answers': answers})

@web.route('/api/v2/answers/<int:id>', methods=['PUT'])
@jwt_required
def prefered_answer(id):
    # retrieve a answer by it'd ID
    email = get_jwt_identity()
    user = get_user(email)
    
    # Mark a specific answer
    mark = get_answer(id)

    if mark is None:
        return jsonify({'message': 'Answer not available'})

    mark['status'] = request.json.get('status'),
    mark['date_posted'] = datetime.now()

    mark_answer(id, mark)

    return jsonify({'Answer': mark}), 200


@web.route('/api/v2/auth/signout', methods=['POST'])
@jwt_required
def signout():
    # Log out a sign in user
    jti = get_raw_jwt()['jti']
    Blacklist.save(jti)
    return jsonify({'message': 'Logged out successfully!'}), 200


@web.route('/api/v2/users/questions', methods=['GET'])
def all_questions():

    questions = display_questions()
    if questions is None:
    # retrieve all questions
        return jsonify({'message': 'No questions found'})
    return jsonify({'Questions': questions}), 200
    
