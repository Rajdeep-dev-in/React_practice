
import React from "react";

let movies = [{
    "name": "Jawan",
    "rating": "9.0",
    "poster": "https://pbs.twimg.com/media/F05m28RWAAAZnmN.jpg:large",
    "description": "A man is driven by a personal vendetta to rectify the wrongs in society",
    "cast": "Shah Rukh Khan  Nayanthara Vijay Sethupathi"
},
{
    "name": "Singham",
    "rating": "6.0",
    "poster": "https://m.media-amazon.com/images/M/MV5BOTJmNjE0OWYtN2U0NC00YmIzLWE0YWItNGE2MzkyYmI1YjFkXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_FMjpg_UX1000_.jpg",
    "description": "Bajirao Singham is a police sub- inspector who hails from a small town of Sawantwadi in Maharashtra. He fights against corruption ",
    "cast": "Ajay Devgn  Prakash Raj  Kajal Aggarwal"
},
{
    "name": "KGF",
    "rating": "8.3",
    "poster": "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
    "description": "KGF is an Indian period action film series set mostly in the Kolar Gold Fields",
    "cast": "Yash  Srinidhi  Ramachandra Raju"
},
{
    "name": "Spider Man",
    "rating": "6.0",
    "poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    "description": "Spider-Man is a superhero appearing in American comic books published by Marvel Comics",
    "cast": "Tobey Maguire  Kirsten Dunst  Willem Dafoe"
},
{
    "name": "Iron Man",
    "rating": "7.6",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    "description": "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name",
    "cast": "Robert Downey Jr.  Jon Favreau  Gwyneth Paltrow"
},
{
    "name": "Captain Amarica",
    "rating": "7.7",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_.jpg",
    "description": "Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics",
    "cast": "Steve Rogers Hayley Atwell Sebastian Stan"
},
{
    "name": "Thor",
    "rating": "6.8",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTcyNDAwNDc2OF5BMl5BanBnXkFtZTcwOTc4MjIwNQ@@._V1_.jpg",
    "description": "Thor is exiled by his father, Odin, the King of Asgard",
    "cast": "Chris Hemsworth  Natalie Portman  Tom Hiddleston"
},
{
    "name": "Bahubali",
    "rating": "6.5",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmM3ODk3MDgtZjQwZi00Y2ZhLTg0YTItMTJiNmNjNzRkYmQ4XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_.jpg",
    "description": "Baahubali: The Beginning is a 2015 Indian Telugu-language epic action film co-written and directed by S. S. Rajamouli",
    "cast": "Prabhas  Rana Daggubati  Anushka Shetty"
},
{
    "name": "Puspha",
    "rating": "6.0",
    "poster": "https://e1.pxfuel.com/desktop-wallpaper/926/263/desktop-wallpaper-pushpa-movie-super-posters-socialnews-xyz-pushpa-movie-thumbnail.jpg",
    "description": "Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India",
    "cast": "Allu Arjun  Rashmika Mandanna  Sunil"
},
{
    "name": "RRR",
    "rating": "7.0",
    "poster": "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    "description": "A fearless revolutionary and an officer in the British force, who once shared a deep bond",
    "cast": "Ram Charan  N. T. Rama Rao Jr. Alia Bhatt"
}

];

function Moviecard({poster}){
    return(
        <>
             <div className="moviecard-box">
               <div className="movie-image">
                   <img
                      src={poster}
                       className="cover-image"
                />
              </div>
            </div>
        </>
    )
}



let Card = () => {
    return(
    <div className="container">{
        movies.map((movie) => {
        return <Moviecard {...movie}/>
    })
    }
    </div>
    )
}

export default Card


