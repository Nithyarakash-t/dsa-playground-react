import './App.css';
import './template/template.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Airroutes from './searching_algorithms/bfs_dfs/Airroutes';
import BinarySearch from './searching_algorithms/binarysearch/binarySearch';
import Memoization from './algorithms/memoization/Memoization';
import BoyerMooreMajority from './algorithms/boyer-moore_majority_matching/BoyerMooreMajority';

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
                <li>
                  <Link to="/memoization">Memoization</Link>
                </li>
                <li>
                  <Link to='/boyreMooreMajority'>Boyer Moore Majority matching</Link>
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
              <Route
                  path="/memoization"
                  element={<Memoization />}
              ></Route>
              <Route
                  path="/boyreMooreMajority"
                  element={<BoyerMooreMajority />}
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
