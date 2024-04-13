import json
import requests
import asyncio
from transformers import pipeline, AutoTokenizer, AutoModelForSeq2SeqLM
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def get_news_data(api_key):
    api_url = f'https://newsapi.org/v2/everything?q=Modi&from=2024-01-30&sortBy=popularity&apiKey={api_key}'
    response = requests.get(api_url)
    print(response.content)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: Unable to fetch data. Status code: {response.status_code}")
        return None

def clean_json(json_data):
    data = json.loads(json_data)
    articles = data.get("articles", [])
    full_text = " ".join([article.get("content", "") for article in articles])
    cleaned_text = full_text
    return cleaned_text

def summarize_with_transformers(cleaned_text, model_name="facebook/bart-large-cnn", min_length=300):
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
    inputs = tokenizer(cleaned_text, return_tensors="pt", max_length=512, truncation=True)
    summary_ids = model.generate(inputs["input_ids"], max_length=min_length + 50,
                                 min_length=min_length, length_penalty=2.0, num_beams=4, early_stopping=True)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary

async def fetch_and_summarize(api_key):
    news_data = get_news_data(api_key)
    if news_data:
        cleaned_text = clean_json(json.dumps(news_data))
        summary = summarize_with_transformers(cleaned_text, min_length=300)
        return summary
    else:
        return None

@app.route('/summarize', methods=['GET'])
async def summarize_route():
    try:
        api_key = '2e03d90de2ff4bf2bae23d0d1c8ee1ec'

        # Fetch and summarize asynchronously
        summary = await asyncio.gather(fetch_and_summarize(api_key))

        if summary:
            return render_template('Summarizing.html', summary=summary[0])
        else:
            return jsonify({'error': 'Failed to fetch news data.'})
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'})

if __name__ == '__main__':
    app.run(port=5005)
