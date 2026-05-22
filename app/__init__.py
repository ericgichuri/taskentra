from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import get_config

# Initialize extensions outside the factory to keep them accessible
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    
    # Load configuration functionally
    config_data = get_config()
    app.config.from_mapping(config_data)

    # Initialize Extensions
    #db.init_app(app)
    #migrate.init_app(app, db)

    # Register Blueprints (Placeholders for now)
    from app.routes.auth import auth_bp
    from app.routes.dashboard import main_bp
    from app.routes.tasks import tasks_bp
    from app.routes.payments import payment_bp
    
    app.register_blueprint(auth_bp)
    app.register_blueprint(main_bp)
    app.register_blueprint(tasks_bp)
    app.register_blueprint(payment_bp)

    return app