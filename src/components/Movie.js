//movie 컴포넌트 파일
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres}){
    //이 경우 key는 필요치 않음.
    return (
        <div> 
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul> 
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

//어떤 Props를 가지고있는지 알려주기.
Movie.propTypes = {//PropTypes를 지정
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired, //PropType은 string이며, 필수요소이다.
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;