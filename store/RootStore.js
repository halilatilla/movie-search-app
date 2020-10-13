import { types } from 'mobx-state-tree';
import MoviesStore from './MoviesStore';

const RootStore = types.model('RootStore', {
  moviesStore: types.maybe(MoviesStore)
});

export default RootStore;
