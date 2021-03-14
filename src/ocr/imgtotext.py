from PIL import Image
import pytesseract

def getText(path : str):
    return pytesseract.image_to_string(Image.open(path))

def paragraph(text):
    para = list(filter(lambda x : x != '', text.split('\n\n')))
    return '\n'.join(para)

if __name__ == '__main__':
    print(paragraph(getText("/home/aradhya/Desktop/hacks/scaling-potato/src/ocr/Screenshot from 2021-03-11 12-52-16.png")))
