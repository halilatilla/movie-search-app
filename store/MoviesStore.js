import { types } from 'mobx-state-tree';

const MoviesStore = types.model('MoviesStore', {
  movies: types.string
});

export default MoviesStore;
