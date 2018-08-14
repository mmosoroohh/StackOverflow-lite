from flask_api import FlaskAPI
from flask import request, jsonify, abort

# local import
from instance.config import app_config

def create_app(config_name):

    app = FlaskAPI(__name__, instance_relative_config=True)

    questions = []

    @app.route('/api/v1/questions', methods=['POST'])
    def question():
        # Post a question
        question = {'id': len(questions)+1,
            'Questions': request.json.get('Question'),
            'Date posted': request.json.get('Date posted')
        }
        questions.append(question)
        return jsonify({'Questions': questions}), 201

    @app.route('/api/v1/questions', methods=['GET'])
    def view_all_questions():
        # retrieve all questions
        return jsonify({'Questions': questions}), 200

    
    return app

