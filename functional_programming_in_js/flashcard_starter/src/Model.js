const initModel = {
    nextId: 0,
    addingFlashCard: false,
    flashcards: [{
            id: 1,
            editing: true,
            hiddenAnswer: true,
            question: 'asdfsad',
            answer: 'asdfsadf',
            ranking: 0
        },
        {
            id: 2,
            editing: true,
            hiddenAnswer: true,
            question: '',
            answer: '',
            ranking: 0
        }
    ]
};

export default initModel;