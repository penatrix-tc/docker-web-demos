import flask
import json
import math
from flask import request, jsonify, render_template

app = flask.Flask(__name__)

# Serve a static page
@app.route('/') 
def index(): 
    return render_template("index.html")

@app.get('/hello') 
def index(): 
    return jsonify({"msg":"Hello, world!"})

 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port= 8080) 
