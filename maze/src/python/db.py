import sqlite3
import json

connection = sqlite3.connect('user.db')
cursor = connection.cursor()
with open("json_weight.json", "r") as f:
    data = json.load(f)

weight = data['weight']
age = data['age']

cursor.execute('INSERT INTO Users (weight, age) VALUES ( ?, ?)', (weight, age))

connection.commit()
connection.close()