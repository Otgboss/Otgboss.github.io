from app import db
from datetime import datetime, timezone
from werkzeug.security import generate_password_hash, check_password_hash
class ContactMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = datetime.now(timezone.utc)
    def __repr__(self):
        return f"<ContactMessage{self.email}>"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80),unique=True, nullable=False)
    email = db.Column(db.String(120),unique=True, nullable=False)
    password = db.Column(db.String(200),nullable=False)
    created_at = db.Column(db.DateTime,default=datetime.utcnow)
    def __repr__(self):
        return f'<User {self.username}>'
    def set_password(self, raw_password):
        self.password = generate_password_hash(raw_password)
    def check_password_hash(self, raw_password):
        return check_password_hash(self.password, raw_password)