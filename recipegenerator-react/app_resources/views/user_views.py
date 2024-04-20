from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_user, logout_user, login_required
from models import User

user_views = Blueprint('auth', __name__)

@user_views.route('/signup', methods=['POST'])
def signup():
    user = User()
    
    User.create_user(email, password) 

    return User().signup()

@user_views.route('/login', methods=['GET', 'POST'])
def login():
    # Your login logic here...
    pass

@user_views.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.do_main_home'))

