from flask import Blueprint, jsonify, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
@main_bp.route('/home')
def home():
    return render_template('index.html')

@main_bp.route('/how-it-works')
def works():
    return render_template('works.html')

@main_bp.route('/dashboard')
def dashboard():
    return render_template('dashboard/dashboard.html')

@main_bp.route('/profile')
def profile():
    return render_template('dashboard/profile.html')

@main_bp.route('/activity')
def activity():
    return render_template('dashboard/activity.html')

# 2. This provides the actual data
@main_bp.route('/api/user_stats')
def get_user_stats():
    # Logic to get user from DB
    stats = {
        "username": "Eric",
        "balance": 15.50,
        "streak": 5,
        "xp": 120
    }
    return jsonify(stats)