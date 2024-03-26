import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {

    constructor() {
        super();
        this.state = {

            movies: [
                {
                    title: 'The Avengers',
                    plot:
                        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    rating: '8.0',
                    price: 99,
                    star: 0,
                    fav: false,
                    addToCart: false
                },
                {
                    title: 'The Dark Knight',
                    plot:
                        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
                    rating: '9.0',
                    price: 199,
                    star: 0,
                    fav: false,
                    addToCart: false
                },
                {
                    title: 'Iron Man',
                    plot:
                        'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
                    rating: '7.9',
                    price: 139,
                    star: 0,
                    fav: false,
                    addToCart: false
                }]
        }
    }

    handleAddStars = (movie) => {
        const { movies } = this.state;
        const movieId = movies.indexOf(movie);

        if (movies[movieId].star < 5) {
            movies[movieId].star += 0.5
        }

        this.setState({
            movies
        });
    }

    handleDecStars = (movie) => {
        const { movies } = this.state;
        const movieId = movies.indexOf(movie);

        if (movies[movieId].star > 0) {
            movies[movieId].star -= 0.5;
        }

        this.setState({
            movies
        })

    }

    handleToggleFav = (movie) => {
        const { movies } = this.state;
        const movieId = movies.indexOf(movie);

        movies[movieId].fav = !movies[movieId].fav;

        this.setState({
            movies
        })
    }

    handleAddtocart = (movie) => {
        const { movies } = this.state;
        const movieId = movies.indexOf(movie);

        movies[movieId].isInCart = !movies[movieId].isInCart;

        this.setState({
            movies
        })
    }
    render() {
        const { movies } = this.state;

        return (
            <div className="main">
                {movies.map((movie, index) => (
                    <MovieCard movies={movie}
                        key={index}
                        onIncStars={this.handleAddStars}
                        onDecStars={this.handleDecStars}
                        onClickFav={this.handleToggleFav}
                        onClickAddtocart={this.handleAddtocart} />

                ))}
            </div>
        )
    }
}

export default MovieList;