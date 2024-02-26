import os
from sqlalchemy import create_engine, text

db_connection_string = os.environ['DB_CONNECT_STRING']

engine = create_engine(db_connection_string, connect_args={})

def load_jobs_from_db():
  with engine.connect() as conn:
    result = conn.execute(text("select * from user_detail;"))
    result_dicts = []
    for row in result.all():
      result_dicts.append(dict({"name":row[1], "email":row[2]}))
    return result_dicts