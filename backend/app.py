from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
	return "Hello! This is the main page <h1>HELLO</h1>"

@app.route("/about")
def about_page():
    return "Hello! This is the about page <h1>ABOUT</h1>"

@app.route("/recipe_search")
def recipe_search():
    return "Hello! This is the list of recipes we currently provide <h1>RECIPES</h1>"


if __name__== '__main__':
    app.run()
