import * as R from 'ramda';

const MSGS = {
    SHOW_FORM: 'SHOW_FORM',
    MEAL_INPUT: 'MEAL_INPUT',
    CALORIES_INPUT: 'CALORIES_INPUT',
    SAVE_MEAL: 'SAVE_MEAL'
}

export function showFormMsg(showForm) {
    return {
        type: MSGS.SHOW_FORM,
        showForm
    }
}

export function mealInputMsg(description) {
    return {
        type: MSGS.MEAL_INPUT,
        description
    }
}

export function caloriesInputMsg(calories) {
    return {
        type: MSGS.CALORIES_INPUT,
        calories
    }
}

export const saveMealMsg = { type: MSGS.SAVE_MEAL }

function add(msg, model) {
    const { nextId, calories, description } = model;

    const newMeal = { id: nextId, calories, description };
    console.log({...model, description: '', calories: 0, meals: [...model.meals, newMeal] });
    return {
        ...model,
        nextId: nextId + 1,
        showForm: false,
        description: '',
        calories: 0,
        meals: [...model.meals, newMeal]
    };
}



function update(msg, model) {
    //  console.log(msg);
    switch (msg.type) {
        case MSGS.SHOW_FORM:
            return {...model, showForm: msg.showForm, description: '', calories: 0 };
        case MSGS.MEAL_INPUT:
            const { description } = msg;
            return {...model, description };
        case MSGS.CALORIES_INPUT:
            const calories = R.pipe(
                parseInt,
                R.defaultTo(0)
            )(msg.calories);
            return {...model, calories };
        case MSGS.SAVE_MEAL:
            return add(msg, model);
        default:
            return model;
    }
}

export default update;