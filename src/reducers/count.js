import { Map } from 'immutable';
import { INCREMENT, DECREMENT } from 'actions/count';
import { MAKE_COMMENT } from '../actions/count';

const initialState = Map({
  counter: 0,
  comments: [{ text: 'comment text', author: 'authrorname', dateCreated: Date.now() }],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // eslint-disable-next-line no-case-declarations
      const counterInc = state.get('counter') + 1;

      return state.merge(
        Map({
          counter: counterInc,
        }),
      );

    case MAKE_COMMENT:
      // eslint-disable-next-line no-case-declarations
      const oldComments = state.get('comments');
      const newCommentObj = {
        text: action.payload,
        author: 'Doge',
        dateCreated: Date.now(),
      };
      return state.merge(
        Map({
          comments: [...oldComments, newCommentObj],
        }),
      );
    case DECREMENT:
      // eslint-disable-next-line no-case-declarations
      const counterDec = state.get('counter') - 1;

      return state.merge(
        Map({
          counter: counterDec,
        }),
      );
    default:
      return state;
  }
};
