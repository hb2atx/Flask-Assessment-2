from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/api/get-lucky-num', methods=['POST'])
def get_lucky_num():
   
    data = request.json

   
    errors = {}
    required_fields = ['name', 'email', 'year', 'color']
    for field in required_fields:
        if field not in data or not data[field]:
            errors[field] = [f'This field is required.']

    
    try:
        year = int(data.get('year', 0))
        if year < 1900 or year > 2000:
            errors['year'] = [f'Invalid value, must be between 1900 and 2000, inclusive.']
    except ValueError:
        errors['year'] = [f'Invalid value, must be a valid year.']

   
    valid_colors = ['red', 'green', 'orange', 'blue']
    if 'color' in data and data['color'] not in valid_colors:
        errors['color'] = [f'Invalid value, must be one of: {", ".join(valid_colors)}.']

    
    if errors:
        return jsonify({'errors': errors}), 400

  
    lucky_number = requests.get('http://numbersapi.com/random/trivia?min=1&max=100').json()

    year_fact = requests.get(f'http://numbersapi.com/{year}/year').json()

   
    response = {
        'num': {'fact': lucky_number['text'], 'num': lucky_number['number']},
        'year': {'fact': year_fact['text'], 'year': str(year)}
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
