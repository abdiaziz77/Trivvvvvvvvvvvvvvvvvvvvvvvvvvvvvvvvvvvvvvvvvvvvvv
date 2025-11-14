import os
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

class Config:
    # Secret key for Flask sessions
    SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")

    # SQLAlchemy database URI using environment variables
    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://{os.getenv('MYSQL_USER', 'jenganow_user')}:"
        f"{os.getenv('MYSQL_PASSWORD', '7970')}@"
        f"{os.getenv('MYSQL_HOST', 'localhost')}/"
        f"{os.getenv('MYSQL_DB', 'jenganow_db')}"
    )

    # Disable Flask-SQLAlchemy event system (optional)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
