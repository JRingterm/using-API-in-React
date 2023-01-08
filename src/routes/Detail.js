import { useEffect, useState, useCallback } from "react";
import {useParams} from "react-router-dom"; //url에 있는 변수를 반환해주는 함수

function Detail() {
    const [loading, setLoading] = useState(true);
    const [details, setDetail] = useState();
    const { id } = useParams();
    const getMovieDetail = useCallback(async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);//json 데이터가 잘 들어왔는지 확인해보는것.
        setDetail(json.data.movie);
        setLoading(false);
    },[id]);
    useEffect(() => {
        getMovieDetail();
    },[getMovieDetail]);
    return (
        <div>
            {loading ? (<h1>Loading...</h1>) : (
            <div>
                <>
                    <h1>Detail of "{details.title}"</h1>
                    <img src={details.large_cover_image} alt={details.title}/>
                    <h2>{details.title} ({details.year})</h2>
                    <p>{details.description_full}</p>
                    <h2>download Link</h2>
                    <ul>
                        {details.torrents.map((t, index) => (
                            <div key={index}>{index}: {t.url}</div>
                        ))}
                    </ul>
                </>
          </div>
        )}
      </div>
    );
}
export default Detail; 