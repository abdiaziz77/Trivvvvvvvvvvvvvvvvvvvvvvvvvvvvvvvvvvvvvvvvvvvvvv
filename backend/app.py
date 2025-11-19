from flask import Flask, jsonify
from flask_cors import CORS
from extensions import db, migrate
from config import Config
from routes.auth_route import auth_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # CORS configuration
    CORS(app,
         resources={r"/*": {"origins": "http://127.0.0.1:5173" "http://localhost:5173/"}},
         supports_credentials=True)

    # Register blueprints
    app.register_blueprint(auth_bp)

    # Health check route
    @app.route('/health', methods=['GET'])
    def health_check():
        return jsonify({"status": "healthy", "message": "Server is running"})

    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({"error": "Endpoint not found"}), 404

    @app.errorhandler(500)
    def internal_error(error):
        return jsonify({"error": "Internal server error"}), 500

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)