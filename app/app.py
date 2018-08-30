from flask_api import FlaskAPI
from flask import Flask, jsonify
from flask_jwt_extended import JWTManager
from app.database import Database
from flask_cors import CORS
db = Database()

# local import
from instance.config import app_config

def create_app(config_name):

    app = FlaskAPI(__name__, instance_relative_config=True)
    CORS(app)

    app.config.from_object(app_config[config_name])

    db.init_app(app)

    from app.helpers import get_by_field

    jwt = JWTManager(app)


    from app import routes

    app.register_blueprint(routes.web, url_prefix="/")

    @jwt.token_in_blacklist_loader
    def check_if_token_in_blacklist(decryted_token):
        jti = decryted_token['jti']
        return get_by_field('token')

    @app.errorhandler(404)
    def page_not_found(error):
        return jsonify({"message": "The input must be an integer!"}), 404

    @app.errorhandler(500)
    def internal_server_error(error):
        return jsonify({"message": "Encountering an internal error with our server!"}), 500

    @app.errorhandler(403)
    def forbidden(error):
        return jsonify({"message": "You do not have permission to access this resource!"}), 403

    @app.errorhandler(405)
    def method_not_allowed(error):
        return jsonify({"message": "This method is not allowed, Please check again!"})
    

    return app

