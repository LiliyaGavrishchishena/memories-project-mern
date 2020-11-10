
import types from '../constants/actionTypes';

export default (posts = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_ALL:
      return payload;
    case types.LIKE:
      return posts.map((post) => (post._id === payload._id ? payload : post));
    case types.CREATE:
      return [...posts, payload];
    case types.UPDATE:
      return posts.map((post) => (post._id === payload._id ? payload : post));
    case types.DELETE:
      return posts.filter((post) => post._id !== payload);
    default:
      return posts;
  }
};