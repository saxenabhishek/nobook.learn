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


def checkanswers(originalAnswer, userAnswer):

    '''
    returns the euclidian distance between the input vectors

    '''
    vector_orignal = customtrans.siamese(originalAnswer, max_length=128)
    vector_user = customtrans.siamese(userAnswer, max_length=128)

    distance = customtrans.distance(vec1=vector_orignal, vec2=vector_user)

    return distance



def simpler_question_answers(text: str , max_length :int, min_length : int):

    '''
    simplifies the paragraph and generates questions and answer on the simplified text
    '''


    easytext = customtrans.summerizer(text, max_length=max_length, min_length=min_length)
    return question_answers(easytext)

if __name__ == '__main__':

    text = '''
        The physical nature of time is addressed by general relativity with respect to events in space-time.
        Examples of events are the collision or two particles, the explosion of a supernova, or the arrival of a rocket ship. 
        Every event can be assigned four numbers representing its time and position (the event's coordinates). 
        However, the numerical values are different for different observers. 
        In general relativity, the question of what time it is now only has meaning relative to a particular observer.
        Distance and time are intimately related and the time required for light to travel a specific distance is the same for all observers, as first publicly demonstrated by Michelson and Morley. 
        General relativity does not address the nature of time for extremely small intervals where quantum mechanics holds. 
        At this time, there is no generally accepted theory of quantum general relativity.
        Time is one of the seven fundamental physical quantities in both the International System of Units (SI) and International System of Quantities.
        The SI base unit of time is the second.
         Time is used to define other quantities – such as velocity – so defining time in terms of such quantities would result in circularity of definition.
         An operational definition of time, wherein one says that observing a certain number of repetitions of one or another standard cyclical event (such as the passage of a free-swinging pendulum) constitutes one standard unit such as the second, is highly useful in the conduct of both advanced experiments and everyday affairs of life. 
         To describe observations of an event, a location (position in space) and time are typically noted.

        '''    