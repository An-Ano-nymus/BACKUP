from flask import Flask, render_template,request,url_for
import os

# Assuming your Python script (LLM.py) is in the same directory as GOD_DEMON_IS_BACK and GPT_KA_BAAP folders
app = Flask(__name__, template_folder="D:\Raghav\EVOLUTION\GOD_DEMON_IS_BACK\GPT_KA_BAAP",static_folder="D:\Raghav\EVOLUTION\GOD_DEMON_IS_BACK\GPT_KA_BAAP")





@app.route('/index')
def index():
    
    return render_template("frontend.html")  # No need for the full path here


@app.route('/')
def home():
    
    return render_template("frontend.html")  # No need for the full path here



if __name__ == '__main__':
    app.run(debug=True)
