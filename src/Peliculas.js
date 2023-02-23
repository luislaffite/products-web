export default function Peliculas(props) {
    return(
        <div className="movie-item-style-2">
            <img src={props.img} alt="" />
            <div className="mv-item-infor">
                <h6><a href="moviesingle.html">{props.titulo} <span>(2012)</span></a></h6>
                <p className="rate"><i className="ion-android-star"></i><span>{props.rate}</span> /10</p>
                <p className="describe">{props.description}</p>
                <p className="run-time"> {props.duration}  .     <span>MMPA: PG-13 </span>    .     <span>Release: {props.date}</span></p>
                <p>Director: <a href="#">{props.direction}</a></p>
                <p>Stars: <a href="#">{props.actors}</a></p>
            </div>
        </div>
    )
}