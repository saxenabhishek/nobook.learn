from fastapi import FastAPI, File, UploadFile
from src.ocr.imgtotext import paragraph as split_text, getText
from tinydb import TinyDB, Query
from fastapi.middleware.cors import CORSMiddleware
from main_nlp import *
import re

# import threading

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"],
)


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...), UID: str = File(...)):
    db = TinyDB("db.json")
    paragraphs = split_text(getText(file.file))
    d = {"uid": UID, "k": 0, "Alltext": []}
    for i in paragraphs:
        d["Alltext"].append({"text": i, "que": [], "ans": []})
    db.insert(d)
    doQuestions()
    return {"response": "200"}


# async def doQuestions(uid:str):

#     return True


@app.get("/question/")
async def sendquestions(UID: str):
    db = TinyDB("db.json")
    q = Query()
    res = db.search(q.uid == UID)[0]
    length = len(res["Alltext"])
    if length <= res["k"]:
        return {"state": False, "main": []}

    while len(text := res["Alltext"][db.search(q.uid == UID)[0]["k"]]["text"]) < 10:
        db.update({"k": res["k"] + 1}, q.uid == UID)

    print(text)
    text = re.sub("/s+", " ", text)
    print(text)
    db.update({"k": res["k"] + 1}, q.uid == UID)

    print(que_ans := question_answers(text))

    return {"state": False, "main": [*que_ans]}

@app.post("/summary/")
async def summary(iteration : int, UID : str):
    db = TinyDB("db.json")
    q = Query()
    res = db.search(q.uid == UID)[0]
    text = res["Alltext"][db.search(q.uid == UID)[0]["k"]]["text"]
    
    if iteration>2:
        return {"state": False}

    summarized = simpler_question_answers(text)
    db.update({"text": summarized }, q.uid == UID)
    
    return summarized


@app.get("/")
async def read_item():
    return {"message": "Hi, this service is working"}
