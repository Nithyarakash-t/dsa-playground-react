import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Airroutes from './graphs/airport/Airroutes';

function App() {
  return (
    <>
    {/* <header></header> */}
    <main className='main'>
      <Router>
        <div className='app-main'>
          <div className='app-main-left'>
            <nav className='app-sidebar'>
              <ul className='app-sidebar-list'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/graphs-traversal">BFS, DFS</Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className='app-main-right'>
            <Routes>
              <Route
                  path="/"
                  element={null}
              ></Route>
              <Route
                  path="/graphs-traversal"
                  element={<Airroutes />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </main>
    {/* <footer></footer> */}
    </>
  );
}

export default App;
