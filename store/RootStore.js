import { types } from 'mobx-state-tree';

const Movies = types
  .model({
    width: types.number,
    height: types.number
  })
  .actions((store) => ({
    setWidth(value) {
      store.width = parseFloat(value);
    },
    setHeight(value) {
      store.height = parseFloat(value);
    }
  }))
  .views((store) => ({
    get area() {
      return store.width * store.height;
    },
    get perimeter() {
      return store.width * 2 + store.height * 2;
    }
  }));

const RootModel = types.model({
  movies: Movies
});

export default RootModel;
