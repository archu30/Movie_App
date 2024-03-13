import { Component } from "react";

class MovieCard extends Component {

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

        // this.addStars = this.addStars.bind(this);
    }

    addStars = () => {
        if (this.state.star >= 5) {
            return
        }
        //form1
        this.setState({
            star: this.state.star + 0.5,
        })

        // Second Form
        // this.setState((prevState) => {
        //     return {
        //         stars: prevState.stars + 0.5
        //     }
        // });

        // this.state.stars += 0.5;
        // console.log("this.state.stars:", this.state.stars);
    }



    decStars = () => {

        //form1
        if (this.state.star <= 0) {
            return
        }
        this.setState({
            star: this.state.star - 0.5
        })

    }

    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }

    handleCart = () => {
        this.setState({
            addToCart: !this.state.addToCart
        })
    }

    render() {
        const { title, plot, price, rating, star, fav, addToCart } = this.props;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg" />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" className="str-btn" onClick={this.decStars} />
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png" className="str-btn" onClick={this.addStars} />
                                <span className="starCount">{star}</span>
                            </div>

                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> :
                                <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                            <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>{fav ? "Un-Favourite" : "Favourite"}</button>

                            {/* <button className="cart-btn">Add to Cart</button> */}
                            <button className={addToCart ? "removeCart-btn" : "cart-btn"} onClick={this.handleCart}>{addToCart ? "Remove Cart" : "Add To Cart"}</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default MovieCard;