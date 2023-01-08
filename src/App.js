//react-router-dom을 사용하기 위해서는 몇가지 import가 필요.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//react-router-dom 버전은 5.3.0이다. v6부터는 변경점이 다수있음.
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  );
} 
export default App;