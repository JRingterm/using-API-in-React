import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);//영화 API를 저장할 배열
  const getMovies = async() => {
    const json = await (
      await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
      )
    ).json();
    setMovies(json.data.movies);//json데이터에서 data.movies를 가져옴
    setLoading(false);//데이터를 가져왔으므로 Loading false
  };
  useEffect(() => {
    getMovies();
  },[]);
  console.log(movies);
  //JavaScript를 쓸때는 항상 {}안에 쓰기. 안그러면 그냥 텍스트가 됨!
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
        movies.map((movie) => (
          <div key={movie.id}> 
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            {(movie.hasOwnProperty("genres") ? //장르가 없는 영화도 존재하기에, 장르가 있나없나 검사.
              <ul> 
                {movie.genres.map(g => (
                  <li key={g}>{g}</li>
                ))}
              </ul> : null
            )}
            
          </div>
        ))
      }
    </div>
  );
} 
export default App;