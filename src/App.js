import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [staffs, setStaff] = useState([]);//json 데이터를 보여주기위한 state
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //이 주소로 들어가면 해당API에 대한 상세한 정보 존재.
      .then((response) => response.json()) //response로부터 json 추출
      .then((json) => {
        setStaff(json);
        setLoading(false);
      }); //그 json을 state로 넘기고, loading을 멈춤
    }, []); //컴포넌트가 시작할때 한번만 실행.

  //JavaScript를 쓸때는 항상 {}안에 쓰기. 안그러면 그냥 텍스트가 됨!
  return (
    <div>
      <h1>The Staff! ({staffs.length})</h1> 
      {loading ? <strong>Loading...</strong> : 
        <select>
          {staffs.map((staff) => 
            <option>
              {staff.id}. {staff.name} ({staff.username}): {staff.address.street}, {staff.address.suite}
            </option>
          )}
        </select>
      }
    </div>
  );
} 
export default App;