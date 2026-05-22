# run.py
from app import create_app

app = create_app()

if __name__ == "__main__":
    # In development, use debug=True
    app.run(debug=True, port=5000)