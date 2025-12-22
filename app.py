from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
app = Flask(__name__)
#Data configurations
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    "DATABASE_URL", "sqlite:///site.db"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)
from models import ContactMessage, User #Important: this registers the models
@app.route('/')
def home ():
    return render_template('index.html')
@app.route('/about')
def about():
    return render_template('about.html')
@app.route('/blog')
def blog():
    return render_template('blog.html')
@app.route('/contact')
def contact():
    return render_template('contact.html')
@app.route('/services/webdesign')
def webdesign():
    return render_template('webdesign.html')
@app.route ('/services/development')
def development():
    return render_template('development.html')
@app.route('/services/ecommerce')
def ecommerce():
    return render_template('ecommerce.html')
if __name__ == '__main__':
    app.run(debug=False)
import os
app.secret_key = os.getenv("SECRET_KEY")