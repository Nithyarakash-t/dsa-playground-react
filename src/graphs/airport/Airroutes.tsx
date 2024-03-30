import dfs from './Dfs';
import bfs from './Bfs';
import { useState } from 'react';
import { airports } from './routes'; //adjacencyList, 
import './Airroutes.scss';

function Airroutes() {
    const [source, setSource] = useState('PHX');
    const [destination, setDestination] = useState('BKK');
    
    // function setSourceHandler(input:string) {
    //     setSource(input);
    // }
    // function setDestinationHandler(input:string) {
    //     setDestination(input);
    // }

    return (
        <>
            <div className='airroutes__outer'>
                <div className='airroutes__form'>
                    <div className='airroutes__formitem'>
                        <label htmlFor='airport_source'>Source</label>
                        <select name='airport_source' id='airport_source' value={source} onChange={event=>setSource(event.currentTarget.value)}>
                            {
                                airports.map((item, key)=>{
                                    return <option key={key} value={item}>{item}</option>
                                })
                            }
=                        </select>
                        {/* {
                                [...adjacencyList.keys()].map((item)=>{
                                    return <option>{item}</option>
                                });
                            } */}
                    </div>
                    <div className='airroutes__formitem'>
                        <label htmlFor='airport_destination'>Destination</label>
                        <select name='airport_destination' id='airport_destination' value={destination} onChange={event=>setDestination(event.currentTarget.value)}>
                            {
                                airports.map((item, key)=>{
                                    return <option key={key} value={item}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='airroutes__reswrap'>
                    <div className='airroutes__rescol'>
                        <h3 className='airroutes__rescol-h3'>DFS</h3>
                        <AirrouteDFS src={source} dest={destination}/>
                    </div>
                    <div className='airroutes__rescol'>
                        <h3 className='airroutes__rescol-h3'>BFS</h3>
                        <AirrouteBFS src={source} dest={destination}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Airroutes;

function AirrouteDFS({src, dest, ...props}:any) {
    // const [answer, setAnswer] = useState('true');
    // setAnswer(dfs('PHX', 'EZE', 'Target'));

    return (
        <>
            <p>{src} 'to' {dest}: {dfs(src, dest)}</p>
        </>
    );
}

function AirrouteBFS({src, dest, ...props}:any) {
    // const [answer, setAnswer] = useState('true');
    // setAnswer(bfs('PHX', 'EZE', 'Target'));

    return (
        <>
            <p>{src} 'to' {dest}: {bfs(src, dest)}</p>
        </>
    );
}