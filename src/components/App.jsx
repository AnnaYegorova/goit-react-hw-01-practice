// import { AppBar } from './AppBar/AppBar';

// export const App = () => {
//   return (
//     <div>{/* <AppBar user={{ username: 'Mango', isOnline: true }} /> */}</div>
//   );
// };

import data from '../data.json';
import { Component } from 'react';
import { mapper } from '../utils/mapper';
import { FilmList } from '../components/FilmList/FilmList';
import { Button } from '../components/Button/Button';

export default class App extends Component {
  state = {
    isVisible: false,
    films: mapper(data),
  };

  toggleVisibility = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };

  deleteFilm = deleteId => {
    this.setState(prevState => ({
      films: prevState.films.filter(({ id }) => deleteId !== id),
    }));
  };

  toggleWatchedFilm = currentId => {
    this.setState(prevState => ({
      films: prevState.films.map(film => {
        if (film.id === currentId) {
          return { ...film, watched: !film.watched };
        }
        // console.log(film);
        return film;
      }),
    }));
    console.log(this.state.films);
  };

  render() {
    const { isVisible, films } = this.state;
    return (
      <>
        <h1>Filmoteka</h1>
        <Button
          toggleVisibility={this.toggleVisibility}
          isVisible={isVisible}
        />
        {isVisible && (
          <FilmList
            films={films}
            onDeleteFilm={this.deleteFilm}
            onWatchedFilm={this.toggleWatchedFilm}
          />
        )}
      </>
    );
  }
}
