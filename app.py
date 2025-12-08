from flask import Flask, render_template
app = Flask(__name__)
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
    app.run(debug=True)