import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import * as R from 'ramda';
import { showFormMsg, mealInputMsg, caloriesInputMsg, saveMealMsg } from './Update';

const { pre, div, h1, button, label, input, form, table, thead, tr, td, th, tbody } = hh(h)

function fieldSet(fieldText, inputValue, oninput) {
    return div({ className: '' }, [
        label({ className: 'db mb1' }, fieldText),
        input({
            className: 'pa2 input-reset ba w-100 mb2',
            type: 'text',
            value: inputValue,
            oninput
        })
    ]);
}

function bottomSet(dispatch) {
    return div([
        button({ className: 'f2 pv2 ph3 bg-blue white bn mr2 dim', type: 'submit' }, 'Save'),
        button({ className: 'f2 pv2 ph3 bn bg-light-gray dim', type: 'button', onclick: () => dispatch(showFormMsg(false)) }, 'Cancel')
    ]);
}

function mealRow(dispatch, meal) {
    return tr({ className: 'stripe-dark' }, [
        td([meal.description]),
        td([meal.calories])
    ]);
}

function mealTotal(meals) {
    return tr({ className: 'stripe-dark' }, [
        td({ className: 'b' }, ['Total']),
        td({ className: 'b tr' }, [
            R.pipe(
                R.map(m => m.calories),
                R.reduce((a, b) => a + b, 0)
            )(meals)
        ]),

    ]);
}

function mealsBody(dispatch, model) {
    return tbody({ className: '' }, [
        R.map(R.partial(mealRow)(dispatch), model.meals),
        mealTotal(model.meals)
    ]);

}

const tableHeader = thead({ className: 'challenge accepted' }, [
    tr({ className: 'stripe-dark' }, [
        th({ className: 'fw6 tl pa3 bg-white tl' }, 'Meal'),
        th({ className: 'fw6 tl pa3 bg-white tr' }, 'Calories')
    ])
]);

function tableView(dispatch, model) {
    return table({ className: 'w-100, centered' }, [
        tableHeader,
        mealsBody(dispatch, model)
    ]);
}

function formView(dispatch, model) {
    const { description, calories, showForm } = model;
    if (showForm) {
        return form({
            className: 'w-100 mv2',
            onsubmit: (e) => {
                e.preventDefault();
                dispatch(saveMealMsg)
            }
        }, [
            fieldSet('Meal', description, e => {
                console.log(e);
                dispatch(mealInputMsg(e.target.value));
            }),
            fieldSet('Calores', calories || '', e => dispatch(caloriesInputMsg(e.target.value))),
            bottomSet(dispatch)
        ]);
    }
    return button({
        className: 'f2 pv2 ph3 bg-blue white bn',
        onclick: () => dispatch(showFormMsg(true))
    }, 'Add meal');
}

function view(dispatch, model) {
    return div({ className: 'mw6 center' }, [
        h1({ className: 'f2 pv2 bb' }, 'Calories Counter'),
        formView(dispatch, model),
        tableView(dispatch, model),
        pre(JSON.stringify(model, null, 2))
    ]);

}

export default view;