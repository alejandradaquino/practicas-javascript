import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { deleteFlashcardMsg, saveFlashcardMsg, questionUpdatedMsg, answerUpdatedMsg, showAnswerMsg, editModeMsg, ratedQuestionMsg } from './Update';

const { div, h1, article, p, textarea, button } = hh(h);

export function addFlashCard(model) {
    const { nextId } = model;

    return {...model,
        nextId: nextId + 1,
        flashcards: [
            ...model.flashcards,
            {
                id: nextId + 1,
                editing: true,
                hiddenAnswer: true,
                question: '',
                answer: '',
                ranking: 0
            }
        ]
    }
}
export function deleteFlashCard(model, id) {
    return {...model, flashcards: R.filter(f => f.id !== id, model.flashcards) }
}

export function saveFlashCard(model, id, editing) {
    const flashcard = R.find(f => f.id === id, model.flashcards);
    const updatedFlashcard = {...flashcard, editing }
    return updatedModel(model, updatedFlashcard, id);
}

export function updateQuestion(model, question, id) {
    console.log('ale', model, question, id);
    const updatedFlashcard = {...R.find(f => f.id === id, model.flashcards), question };
    return updatedModel(model, updatedFlashcard, id);
}

export function saveRanking(model, id, ranking) {
    const currentFlshcard = R.find(f => f.id === id, model.flashcards);
    const updatedFlashcard = {...currentFlshcard, ranking: currentFlshcard.ranking + ranking, hiddenAnswer: true };
    return updatedModel(model, updatedFlashcard, id);
}

export function updateAnswer(model, answer, id) {
    const updatedFlashcard = {...R.find(f => f.id === id, model.flashcards), answer };
    return updatedModel(model, updatedFlashcard, id);
}

export function showAnswerFlashCard(model, id) {
    const updatedFlashcard = {...R.find(f => f.id === id, model.flashcards), hiddenAnswer: false };
    return updatedModel(model, updatedFlashcard, id);
}

export function renderFlashCard(dispatch, flashcard) {
    return article({ className: 'enter mw5 mw6-ns br3 hidden ba b--black-10 mv4' }, [
        h1({ className: 'f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3' }, [
            'Question',
            p({
                onclick: () => dispatch(deleteFlashcardMsg(flashcard.id)),
                style: 'padding:0;margin:0',
                className: 'pointer fr'
            }, 'x')
        ]),
        flashcard.editing ? editingMode(dispatch, flashcard) : (
            flashcard.hiddenAnswer ? hiddenMode(dispatch, flashcard) : rateMode(dispatch, flashcard)
        )
    ]);
}

function updatedModel(model, updatedFlashcard, id) {
    const updatedFlashcards = [...R.filter(f => f.id !== id, model.flashcards), updatedFlashcard];
    const sortFunction = R.sortWith([
        R.ascend(R.prop('ranking')),
        R.ascend(R.prop('question'))
    ]);
    return {...model, flashcards: sortFunction(updatedFlashcards) }
}

function editingMode(dispatch, flashcard) {
    return div({ className: 'pa3 bt b--black-10' }, [
        textarea({ className: 'f6 w-100 mv2', placeholder: 'Insert your question', oninput: (e) => dispatch(questionUpdatedMsg(flashcard.id, e.target.value)) }, flashcard.question),
        textarea({ className: 'f6 w-100 mv2', placeholder: 'Insert your answer', oninput: (e) => dispatch(answerUpdatedMsg(flashcard.id, e.target.value)) }, flashcard.answer),
        button({
            className: 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue',
            onclick: () => dispatch(saveFlashcardMsg(flashcard.id))
        }, 'Save')
    ]);
}

function hiddenMode(dispatch, flashcard) {
    return div({ className: 'pa3 bt b--black-10' }, [
        createP(dispatch, flashcard.id, flashcard.question),
        button({
            className: 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue',
            onclick: () => dispatch(showAnswerMsg(flashcard.id))
        }, 'Show Answer')
    ]);
}

function createP(dispatch, id, text) {
    return p({ className: 'f6 w-100 mv2', onclick: () => dispatch(editModeMsg(id)) }, text)
}

function rateMode(dispatch, flashcard) {
    return div({ className: 'pa3 bt b--black-10' }, [
        createP(dispatch, flashcard.id, flashcard.question),
        createP(dispatch, flashcard.id, flashcard.answer),
        button({
            className: 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue',
            onclick: () => dispatch(ratedQuestionMsg(flashcard.id, 0))
        }, 'Bad Answer'),
        button({
            className: 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue',
            onclick: () => dispatch(ratedQuestionMsg(flashcard.id, 1))
        }, 'Good Answer'),
        button({
            className: 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue',
            onclick: () => dispatch(ratedQuestionMsg(flashcard.id, 2))
        }, 'Great Answer')
    ]);
}