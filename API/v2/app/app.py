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

    from app.models import Blacklist
    from app.helpers import get_by_field

    jwt = JWTManager(app)

    @jwt.token_in_blacklist_loader
    def check_if_token_in_blacklist(decrypted_token):
        jti = decrypted_token['jti']
        return get_by_field('token', jti) is not None

    from app import routes


    app.register_blueprint(routes.web, url_prefix="/")

    @app.errorhandler(404)
    def page_not_found(error):
        return jsonify("The resource does not exist"), 404

    @app.errorhandler(500)
    def internal_server_error(error):
        return jsonify("Encountering an internal error with our server!"), 500

    @app.errorhandler(403)
    def forbidden(error):
        return jsonify("You do not have permission to access this resource"), 403
    

    return app

