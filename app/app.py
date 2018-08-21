from flask_api import FlaskAPI
from flask_jwt_extended import JWTManager
from app.database import Database
db = Database()

# local import
from instance.config import app_config

def create_app(config_name):

    app = FlaskAPI(__name__, instance_relative_config=True)
    app.config.from_object(app_config[config_name])

    db.init_app(app)

    jwt = JWTManager(app)

    from app import routes
    app.register_blueprint(routes.web, url_prefix="/")

    return app
