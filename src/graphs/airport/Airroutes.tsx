import dfs from './Dfs';
import bfs from './Bfs';

function Airroutes() {
    
    const DFS_ans:any = dfs('PHX', 'EZE', 'Target');
    const BFS_ans:any = bfs('PHX', 'EZE', 'Target');

    return (
      <>
        <p>DFS: {DFS_ans}</p>
        <p>BFS: {BFS_ans}</p>
      </>
    );
  }
  
  export default Airroutes;