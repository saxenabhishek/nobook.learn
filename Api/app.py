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

@app.get("/check/")
async def 




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


@app.get("/")
async def read_item():
    return {"message": "Hi, this service is working"}
