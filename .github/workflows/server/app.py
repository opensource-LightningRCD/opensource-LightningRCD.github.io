import os,sys
from flask import Flask

app = Flask(__name__)

@app.route("/")
def route_index():
  return "YES, THE FLASK SERVICES WAS RUNNING"
  
app.run(host="0.0.0.0", port=80)
