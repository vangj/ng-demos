from random import randint, choice

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get('/')
def read_root():
    return {'hello': 'world'}


@app.get('/api/lucky')
def get_lucky_number():
    return {
        'luckyNumber': randint(0, 10)
    }

@app.get('/api/social')
def get_social():
    return {
        'title': f'Title - {randint(100, 200)}',
        'description': f'Description - {randint(1_000, 2_000)}',
        'type': choice(['article', 'website']),
        'url': f'http://localhost:4200/dummy-{randint(0, 1_000_000_000)}'
    }

@app.get('/api/data')
def get_data():
    return [{'x': randint(0, 10), 'y': randint(1_000, 2_000)} for _ in range(50)]


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)
