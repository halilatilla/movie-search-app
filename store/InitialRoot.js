import RootStore from './RootStore';

export const initialRoot = () => {
  const store = RootStore.create({
    movies: { with: 20, height: 30 }
  });

  return store;
};
