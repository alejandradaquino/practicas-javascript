import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { inputChangedMsg, selectChangedMsg } from './Update';

const {
    div,
    h1,
    pre,
    select,
    option,
    input
} = hh(h);

function temperatureView(dispatch, temperature, units, position) {
    return div({ className: 'fl', style: 'width:45%' }, [
        input({ className: 'fl', style: 'width:90%', type: 'number', oninput: e => dispatch(inputChangedMsg(e.target.value, position)), value: temperature.value }),
        select({ className: 'fl', style: 'width:90%', onchange: e => dispatch(selectChangedMsg(e.target.value, position)) }, [
            R.map(u => {
                if (u === temperature.unit) {
                    return option({ selected: 'selected' }, [u]);
                }
                return option([u]);
            }, units)
        ])
    ]);

}


function view(dispatch, model) {
    return div({ className: 'mw6 center' }, [
        h1({ className: 'f2 pv2 bb' }, 'Temperature Unit Converter'),
        div([
            temperatureView(dispatch, model.temperatureA, model.units, 'left'),
            div({ className: 'fl', style: 'width:10%' }, '='),
            temperatureView(dispatch, model.temperatureB, model.units, 'right'),
        ]),
        pre({ className: 'fl' }, JSON.stringify(model, null, 2)),
    ]);
}

export default view;