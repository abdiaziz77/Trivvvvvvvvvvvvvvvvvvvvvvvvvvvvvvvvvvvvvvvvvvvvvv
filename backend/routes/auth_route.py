from flask import Blueprint, request, jsonify
from models.user_model import db, User

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "No JSON data provided"}), 400

        first_name = data.get('firstName')
        last_name = data.get('lastName')
        email = data.get('email')
        phone = data.get('phone')
        password = data.get('password')
        confirm_password = data.get('confirmPassword')
        agree_to_terms = data.get('agreeToTerms', False)

        # Required field validation
        if not all([first_name, last_name, email, password, confirm_password]):
            return jsonify({"error": "All required fields must be provided"}), 400

        if len(password) < 6:
            return jsonify({"error": "Password must be at least 6 characters long"}), 400

        if password != confirm_password:
            return jsonify({"error": "Passwords do not match"}), 400

        if not agree_to_terms:
            return jsonify({"error": "You must agree to the terms and conditions"}), 400

        # Check duplicate email
        if User.query.filter_by(email=email).first():
            return jsonify({"error": "Email already registered"}), 400

        # Check duplicate phone (only if phone is provided)
        if phone and User.query.filter_by(phone=phone).first():
            return jsonify({"error": "Phone number already registered"}), 400

        # Create new user
        new_user = User(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
            agree_to_terms=agree_to_terms
        )
        
        # Set password using the model method
        new_user.set_password(password)

        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            "message": "Registration successful",
            "user": new_user.to_dict()
        }), 201

    except Exception as e:
        db.session.rollback()
        print(f"Registration error: {str(e)}")  # For debugging
        return jsonify({"error": "Registration failed", "details": str(e)}), 500

@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "No JSON data provided"}), 400
            
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({"error": "Email and password are required"}), 400

        user = User.query.filter_by(email=email).first()

        if not user or not user.check_password(password):
            return jsonify({"error": "Invalid email or password"}), 401

        return jsonify({
            "message": "Login successful",
            "user": user.to_dict()
        }), 200

    except Exception as e:
        print(f"Login error: {str(e)}")  # For debugging
        return jsonify({"error": "Login failed", "details": str(e)}), 500