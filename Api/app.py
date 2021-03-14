from fastapi import FastAPI, File, UploadFile
from src.ocr.imgtotext import paragraph as split_text, getText
from tinydb import TinyDB, Query

app = FastAPI()
db = TinyDB("db.json")


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...), UID: str = File(...)):

    paragraphs = split_text(getText(file.file))
    d = {"uid": UID, "k": 0, "Alltext": []}
    for i in paragraphs:
        d["text"].append({"text": i, "que": [], "ans": []})
    db.insert(d)
    return {"response": "200"}


@app.get("/")
async def read_item():
    return {"message": "Hi, this service is working"}
