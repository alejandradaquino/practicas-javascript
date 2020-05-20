import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { addFlashscardMsg } from './Update';
import { renderFlashCard } from './FlashcardView';

const { div, h1, article, p, button, pre } = hh(h);

function view(dispatch, model) {
    return div({ className: 'mw8 center' }, [
        h1({ className: 'f2 pv2 bb' }, 'Flashcard Study'),
        button({
            className: 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue',
            onclick: () => dispatch(addFlashscardMsg)
        }, 'Add new flashcard'),
        R.map(R.partial(renderFlashCard, [dispatch]), model.flashcards),
        pre(JSON.stringify(model, null, 2)),
    ]);
}

export default view;