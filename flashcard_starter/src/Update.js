import * as R from 'ramda';
import { addFlashCard, deleteFlashCard, saveFlashCard, updateQuestion, updateAnswer, showAnswerFlashCard, saveRanking } from './FlashcardView';


export const MSGS = {
    ADD_FLASHCARD_CLICKED: 'ADD_FLASHCARD_CLICKED',
    DELETE_FLASHCARD_CLICKED: 'DELETE_FLASHCARD_CLICKED',
    SAVE_FLASHCARD_CLICKED: 'SAVE_FLASHCARD_CLICKED',
    QUESTION_UPDATED: 'QUESTION_UPDATED',
    ANSWER_UPDATED: 'ANSWER_UPDATED',
    SHOW_ANSWER_CLICKED: 'SHOW_ANSWER_CLICKED',
    EDIT_MODE: 'EDIT_MODE',
    RATED_QUESTION: 'RATED_QUESTION'
};

export const addFlashscardMsg = {
    type: MSGS.ADD_FLASHCARD_CLICKED
}

export function ratedQuestionMsg(id, ranking) {
    return {
        type: MSGS.RATED_QUESTION,
        id,
        ranking
    }
}
export function showAnswerMsg(id) {
    return {
        type: MSGS.SHOW_ANSWER_CLICKED,
        id
    }
}
export function editModeMsg(id) {
    return {
        type: MSGS.EDIT_MODE,
        id
    }
}
export function questionUpdatedMsg(id, question) {
    return {
        type: MSGS.QUESTION_UPDATED,
        id,
        question
    }
}

export function answerUpdatedMsg(id, answer) {
    return {
        type: MSGS.ANSWER_UPDATED,
        id,
        answer
    }
}
export function deleteFlashcardMsg(id) {
    return {
        type: MSGS.DELETE_FLASHCARD_CLICKED,
        id
    }
}
export function saveFlashcardMsg(id) {
    return {
        type: MSGS.SAVE_FLASHCARD_CLICKED,
        id
    }
}

function update(msg, model) {
    console.log(msg);
    const { id } = msg;
    switch (msg.type) {
        case MSGS.ADD_FLASHCARD_CLICKED:
            return addFlashCard(model);
        case MSGS.DELETE_FLASHCARD_CLICKED:
            return deleteFlashCard(model, id);
        case MSGS.SAVE_FLASHCARD_CLICKED:
            return saveFlashCard(model, id, false);
        case MSGS.QUESTION_UPDATED:
            const { question } = msg;
            return updateQuestion(model, question, id);
        case MSGS.ANSWER_UPDATED:
            const { answer } = msg;
            return updateAnswer(model, answer, id);
        case MSGS.SHOW_ANSWER_CLICKED:
            return showAnswerFlashCard(model, id);
        case MSGS.EDIT_MODE:
            return saveFlashCard(model, id, true);
        case MSGS.RATED_QUESTION:
            const { ranking } = msg;
            return saveRanking(model, id, ranking);
    }
    return model;
}

export default update;