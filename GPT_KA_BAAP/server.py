from flask import Flask, render_template,request,url_for,redirect
import os

# Assuming your Python script (LLM.py) is in the same directory as GOD_DEMON_IS_BACK and GPT_KA_BAAP folders
app = Flask(__name__, template_folder="D:\Raghav\EVOLUTION\GOD_DEMON_IS_BACK\GPT_KA_BAAP",static_folder="D:\Raghav\EVOLUTION\GOD_DEMON_IS_BACK\GPT_KA_BAAP")


def get_content():
    # Replace this with your logic to fetch content from a database, API, or any other source
    content = "This is the content from the server\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nHELLO."
    return content




@app.route('/index')
def index():
    
    return render_template("frontend.html")  # No need for the full path here


@app.route('/')
def home():
    
    return render_template("frontend.html")  # No need for the full path here



def user(name):  
    if name == '':  
        return redirect(url_for(''))  
    if name == 'index':  
        return redirect(url_for('index'))

    if name=='process_query':
        return redirect(url_for('process_query'))  


@app.route('/process_query', methods=['POST'])
def process_query():
  if request.method == 'POST':
    user_query = request.form['QUESTION']

#     # Process the user query using your LLM (replace with your logic)
#     processed_data = llm.process(user_query)
    

    return render_template("frontend.html", content=get_content())

  # Handle potential errors (e.g., empty query)
  return render_template("frontend.html", content=get_content())





if __name__ == '__main__':
    app.run(debug=True)
