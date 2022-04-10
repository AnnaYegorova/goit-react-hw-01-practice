export const mapper = films => {
  return films.map(({ id, backdrop_path: img, title }) => ({
    img,
    id,
    title,
    watched: false,
  }));
};
