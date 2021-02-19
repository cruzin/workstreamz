export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MAKE_COMMENT = 'MAKE_COMMENT';

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});

export const make_comment = payload => ({
  type: MAKE_COMMENT,
  payload,
});
