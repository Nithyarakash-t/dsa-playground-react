import React from 'react';
import dfs from './Dfs';

function Airroutes() {
    
    const ans:any = dfs('PHX', 'BKK', 'Bangkok');

    return (
      <>
        <div>{ans}</div>
      </>
    );
  }
  
  export default Airroutes;