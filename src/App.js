import logo from './logo.svg';
import { useStyles } from './AppStyle';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './Pages/Login';
import CreateBox from './Pages/Create';
import Display from './Pages/Display';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/create" element={<CreateBox />} />
          <Route exact path="/display" element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
