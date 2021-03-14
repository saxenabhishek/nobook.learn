from rake_nltk import Rake ,Metric
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer

tokenizer = RegexpTokenizer(r'\w+')
def getheadings(corpus):
    corpus = tokenizer.tokenize(corpus)
    
    corpus = ' '.join(corpus)
    extraction = Rake(
                stopwords=stopwords.words('english'),
                ranking_metric=Metric.DEGREE_TO_FREQUENCY_RATIO,   
                min_length=2, 
                max_length=3    
    )
    extraction.extract_keywords_from_text(corpus)
    return extraction.get_ranked_phrases_with_scores()
    
if __name__ == '__main__':

    print(getheadings('Within the field of literary criticism, "text" also refers to the original information content of a particular piece of writing; that is, the "text" of a work is that primal symbolic arrangement of letters as originally composed, apart from later alterations, deterioration, commentary, translations, paratext, etc. Therefore, when literary criticism is concerned with the determination of a "text", it is concerned with the distinguishing of the original information content from whatever has been added to or subtracted from that content as it appears in a given textual document (that is, a physical representation of text).'))    
