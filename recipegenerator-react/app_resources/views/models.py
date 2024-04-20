from flask import Flask, jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
from app import mongo
from werkzeug.security import check_password_hash, generate_password_hash
import uuid

class User:
    
    def signup(email,password):
        
        user = {
            "_id": uuid.uuid4().hex,
            "email": email,
            "password":  pbkdf2_sha256.encrypt('password')
        }
        
        return jsonify(user), 200
    
    @staticmethod
    def create_user(email, password):
        user_collection = mongo.db.users
        hashed_password = generate_password_hash(password)
        user_collection.insert_one({'email': email, 'password': hashed_password})

    @staticmethod
    def validate_login(email, password):
        user_collection = mongo.db.users
        user = user_collection.find_one({'email': email})
        if user and check_password_hash(user['password'], password):
            return user
        return False
    
    