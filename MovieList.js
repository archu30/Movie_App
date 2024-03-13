import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {

    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "Super natural power in the movie.",
            rating: 8.9,
            price: 199,
            star: 0,
            fav: true,
            addToCart: true

        }
    }

    render() {
        const { title, plot, price, rating, stars, fav, addToCart } = this.state;
        return (
            <>

                < MovieCard title={title}
                    plot={plot}
                    price={price}
                    rating={rating}
                    stars={stars}
                    fav={fav}
                    addToCart={addToCart}
                />
            </>
        )
    }
}
export default MovieList;