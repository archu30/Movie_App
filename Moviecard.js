import { Component } from "react";

function Moviecard(props) {

    const { movies, onIncStars, onClickFav, onClickAddtocart, onDecStars } = props;
    const { title, plot, price, rating, star, fav, isInCart } = props.movies;
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
                            <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                className="str-btn" onClick={() => onDecStars(movies)} />
                            <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                            <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                                className="str-btn" onClick={() => onIncStars(movies)} />
                            <span className="starCount">{star}</span>
                        </div>

                        {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> :
                                <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                        <button className={fav ? "unfavourite-btn" : "favourite-btn"}
                            onClick={() => onClickFav(movies)}>
                            {fav ? "Un-Favourite" : "Favourite"}
                        </button>

                        {/* <button className="cart-btn">Add to Cart</button> */}
                        <button className={isInCart ? "removeCart-btn" : "cart-btn"}
                            onClick={() => onClickAddtocart(movies)}>
                            {isInCart ? "Remove Cart" : "Add To Cart"}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Moviecard;