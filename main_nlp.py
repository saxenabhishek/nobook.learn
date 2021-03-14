from src.transformerswrapper import CustomTransformer

customtrans = CustomTransformer()


def question_answers(text: str):
    """
    This function returns a list with dictionary which has questions and answers
    """
    main_dict = {}

    questionList = []
    contents = customtrans.questionGeneration(context=text)

    return contents


def checkanswers(userAns: str, originalAns: str, metric: int):
    """
    returns a boolenn value 

    """
    uservec = customtrans.siamese(userAns, max_length=128)
    originalvec = customtrans.siamese(originalAns, max_length=128)

    distance = customtrans.distance(uservec, originalvec)
    if distance > metric:
        return False

    return True


def simpler_question_answers(text: str, max_length: int, min_length: int):

    """
    simplifies the paragraph and generates questions and answer on the simplified text
    """

    easytext = customtrans.summerizer(text, max_length=max_length, min_length=min_length)
    return easytext[0]["summary_text"]


def generateText(text: str, max_length: int):
    return customtrans.generateText(text, max_length=max_length)


if __name__ == "__main__":

    text1 = """
        The physical nature of time is addressed by general relativity with respect to events in space-time.
        Examples of events are the collision or two particles, the explosion of a supernova, or the arrival of a rocket ship. 
        Every event can be assigned four numbers representing its time and position (the event's coordinates). 
        However, the numerical values are different for different observers. 
        """

    # text2 = """Refraction is the bending of a wave when it enters a medium where its speed is different. The refraction of light when it passes from a fast medium to a slow medium bends the light ray toward the normal to the boundary between the two media. Refraction is responsible for image formation by lenses and the eye."""
    # text2 = "1. INTRODUCTION"
    print(text1)
    print(question_answers(text1))
