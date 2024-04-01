import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Airroutes from './graphs/bfs_dfs/Airroutes';
import BinarySearch from './graphs/binarysearch/binarySearch';

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
                <li>
                  <Link to="/binary-search">Binary Search</Link>
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
              <Route
                  path="/binary-search"
                  element={<BinarySearch />}
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
