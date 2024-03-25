from flask_cors import CORS
from flask import Flask, send_from_directory

#app = Flask(__name__)
app = Flask(__name__, static_folder='path/to/react-app/build', static_url_path='/')

CORS(app)  # This will enable CORS for all routes and domains


@app.route("/")
def home():
    return send_from_directory(app.static_folder, 'index.html')
	#return "Hello! This is the main page <h1>HELLO</h1>"

@app.route("/about")
def about_page():
    return "Hello! This is the about page <h1>ABOUT</h1>"

@app.route("/recipe_search")
def recipe_search():
    return "Hello! This is the list of recipes we currently provide <h1>RECIPES</h1>"


if __name__== '__main__':
    app.run()