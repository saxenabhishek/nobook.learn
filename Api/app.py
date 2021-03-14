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
    return {"response": "200"}


# async def doQuestions(uid:str):

#     return True


@app.("/check/")
async def checkans(user_ans: list, corr_ans: list):
    return {"state": checkanswers(user_ans, corr_ans, 7)}


@app.get("/question/")
async def sendquestions(UID: str):
    db = TinyDB("db.json")
    q = Query()
    res = db.search(q.uid == UID)[0]
    length = len(res["Alltext"])
    if length <= res["k"]:
        return {"state": False, "main": []}

    # while len(text := res["Alltext"][db.search(q.uid == UID)[0]["k"]]["text"]) < 10:
    #     print("In loop for length")
    #     db.update({"k": res["k"] + 1}, q.uid == UID)

    f = True
    while f:
        try:
            k = db.search(q.uid == UID)[0]["k"]
            print(k)
            if length <= k:
                return {"state": False, "main": []}
            text = res["Alltext"][k]["text"]
            print(text)
            que_ans = question_answers(text)
            f = False
        except:
            db.update({"k": db.search(q.uid == UID)[0]["k"] + 1}, q.uid == UID)

    db.update({"k": db.search(q.uid == UID)[0]["k"] + 1}, q.uid == UID)

    return {"state": False, "main": [*que_ans]}


@app.post("/summary/")
async def summary(iteration: int, UID: str):
    db = TinyDB("db.json")
    q = Query()
    res = db.search(q.uid == UID)[0]
    text = res["Alltext"][db.search(q.uid == UID)[0]["k"]]["text"]

    if iteration > 2:
        return {"state": False}

    print(text)
    summarized = simpler_question_answers(text, min_length=15, max_length=20)
    if len(summarized) < 10:
        summarized = generateText(summarized, max_length=20)
    print(summarized)
    db.update({"text": summarized}, q.uid == UID)
    return {"sum": summarized}


@app.get("/")
async def read_item():
    return {"message": "Hi, this service is working"}
