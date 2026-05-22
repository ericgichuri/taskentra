from flask import Blueprint, jsonify, render_template

payment_bp = Blueprint('payment', __name__)

@payment_bp.route('/wallet')
def wallet():
    return render_template('payment/wallet.html')

@payment_bp.route('/premium')
def premium():
    return render_template('payment/premium.html')