import os
from dotenv import load_dotenv

load_dotenv()

def get_config():
    return {
        "SECRET_KEY": os.environ.get('SECRET_KEY', 'taskentra-dev-secret'),
        "SQLALCHEMY_DATABASE_URI": os.environ.get('DATABASE_URL', 'mysql+pymysql://root:@localhost/taskentra'),
        "SQLALCHEMY_TRACK_MODIFICATIONS": False,
        
        # AI and External APIs
        "GEMINI_API_KEY": os.environ.get('GEMINI_API_KEY'),
        "EXCHANGE_API_KEY": os.environ.get('EXCHANGE_API_KEY'),
        "EXCHANGE_SECRET_KEY": os.environ.get('EXCHANGE_SECRET_KEY'),
        
        # M-Pesa (Kenya Specific)
        "MPESA_CONSUMER_KEY": os.environ.get('MPESA_CONSUMER_KEY'),
        "MPESA_CONSUMER_SECRET": os.environ.get('MPESA_CONSUMER_SECRET'),
    }