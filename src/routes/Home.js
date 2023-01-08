//App.js에서 작성했던거 그대로 옮겨옴.
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
// 경로에서 /는 최상위폴더, ./는 현재위치폴더, ../는 현재위치의 상단폴더를 의미한다.

function Home() {
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
        {loading ? (<h1>Loading...</h1>) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
}

export default Home;