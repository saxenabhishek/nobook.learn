from src.transformerswrapper import CustomTransformer

customtrans = CustomTransformer()

def question_answers(text : str):
    '''
    This function returns a list with dictionary which has questions and answers
    '''
    main_dict = {}

    questionList = []
    contents = customtrans.questionGeneration(context=text)

    return contents


def checkanswers(userlist : list, originallist : list, metric: int):

    '''
    returns a boolenn value 

    '''

    uservec = []
    originalvec = []
    boollist = []
    count = 0

    for i in range(len(userlist)):
        uservec.append(customtrans.siamese(userlist[i], max_length=128))
        originalvec.append(customtrans.siamese(originallist[i], max_length=128))

    for i in range(len(uservec)):
        distance = customtrans.distance(uservec[i], originalvec[i])
        
        if distance > metric:
            boollist.append(False)

        else:
            boollist.append(True)
        
        for i in boollist:
            if i == True:
                count += 1

        if count < len(boollist)/2:
            return False
        
    return True



def simpler_question_answers(text: str , max_length :int, min_length : int):

    '''
    simplifies the paragraph and generates questions and answer on the simplified text
    '''


    easytext = customtrans.summerizer(text, max_length=max_length, min_length=min_length)
    return question_answers(easytext)

if __name__ == '__main__':

    text1 = '''
        The physical nature of time is addressed by general relativity with respect to events in space-time.
        Examples of events are the collision or two particles, the explosion of a supernova, or the arrival of a rocket ship. 
        Every event can be assigned four numbers representing its time and position (the event's coordinates). 
        However, the numerical values are different for different observers. 
        '''

    text2 = '''
        The physical nature of time is addressed by general relativity with respect to events in space-time.
        Examples of events are the collision or two particles, the explosion of a supernova, or the arrival of a rocket ship. 
        Every event can be assigned four numbers representing its time and position (the event's coordinates). 
        However, the numerical values are different for different observers. 

        '''         
