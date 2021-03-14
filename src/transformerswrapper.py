from transformers import pipeline
from transformers import AutoTokenizer, AutoModel
import torch
from .question_generation.pipelines import secondary_pipeline
import numpy as np 

class CustomTransformer():

    def __init__(self):
        self.textsummeryModel = None
        self.questionmodel = None
        self.textsummeryModel = None
        self.modelsiamese = None
        self.questiongenerationmodel = None
    def summerizer(self, text, max_length=20, min_length=5):
        if self.textsummeryModel == None:
            self.textsummeryModel = pipeline('summarization')
        return self.textsummeryModel(text, max_length=max_length, min_length=min_length)

    # def questionAnswer(self, context, question):
    #     if self.questionmodel == None:
    #         self.questionmodel = pipeline("question-answering")
    #     return self.questionmodel(question=question, context=context)


    def mean_pooling(self, model_output, attention_mask):
        token_embeddings = model_output[0]
        input_mask_expanded = attention_mask.unsqueeze(-1).expand(token_embeddings.size()).float()
        sum_embeddings = torch.sum(token_embeddings * input_mask_expanded, 1)
        sum_mask = torch.clamp(input_mask_expanded.sum(1), min=1e-9)
        return sum_embeddings / sum_mask

    def siamese(self, text, max_length):
        if self.modelsiamese == None:
            self.modelsiamese = AutoModel.from_pretrained('sentence-transformers/bert-base-nli-mean-tokens')
        tokenizer = AutoTokenizer.from_pretrained('sentence-transformers/bert-base-nli-mean-tokens')

        encodedText = tokenizer(text, padding=True, max_length=max_length, return_tensors='pt', truncation=True)

        with torch.no_grad():
            modelout = self.modelsiamese(**encodedText)
        
        sentence_embeddings = self.mean_pooling(modelout, encodedText['attention_mask'])
        
        return sentence_embeddings

    def distance(self, vec1, vec2):
        return np.linalg.norm(vec1 - vec2)

    def questionGeneration(self, context):
        if self.questiongenerationmodel == None:
            self.questiongenerationmodel = secondary_pipeline('question-generation')
    

        return self.questiongenerationmodel(context)
    
if __name__ == '__main__':
    transformers = CustomTransformer()
    text = '''
        Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum 
and first released in 1991, Python's design philosophy emphasizes code 
readability with its notable use of significant whitespace.
    '''
    # print(transformers.summerizer(text=text))


    # print(transformers.siamese(text=text, max_length=12))
    # print(transformers.questionAnswer(context=context, question=question))

