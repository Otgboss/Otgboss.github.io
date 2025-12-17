from app import db
from datetime import datetime, timezone
class ContactMessage(db.model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = datetime.now(timezone.utc)
    def __repr__(self):
        return f"<ContactMessage{self.email}>"