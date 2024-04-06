import { useState } from "react"

export default function Memoization() {
    const [fibInput, setFibInput] = useState(4);
    const [squareInput, setSquareInput] = useState(7);

    return (
        <>
            <div className="template__wrap">
                <div className="template__section">
                    <h3>Memoization fibonacci</h3>
                    <div className="template__form">
                        <label htmlFor="mem_fib">Enter nth number of the sequence:</label>
                        <input type="number" name="mem_fib" id="mem_fib" placeholder='Enter number' value={fibInput} onInput={event=>setFibInput(+event.currentTarget.value)} />
                    </div>
                    <div className="template__results">
                        <div>
                            <h4>Traditional</h4>
                            <FibTrad n={fibInput} />
                        </div>
                        <div>
                            <h4>Memoization</h4>
                            <FibMem n={fibInput} />
                        </div>
                    </div>
                </div>
                <div className="template__section">
                    <h3>Memoization square function</h3>
                    <div className="template__form">
                        <label htmlFor="mem_square">Enter number:</label>
                        <input type="number" name="mem_square" id="mem_square" placeholder='Enter number' value={squareInput} onInput={event=>setSquareInput(+event.currentTarget.value)} />
                    </div>
                    <div className="template__results">
                        <div>
                            <div>
                                <h4>No memoization</h4>
                                <SquareTrad n={squareInput} />
                            </div>
                            <div>
                                <h4>Memoization</h4>
                                <SquareMem n={squareInput} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function FibTrad({n, ...props}:any) {
    const solution:number = fibonacci__traditional(n);
    return (
        <>
        <div>{solution}</div>
        </>
    )
}

function FibMem({n, ...props}:any) {
    const solution:number = finonacci__memoization(n);
    return (
        <>
        <div>{solution}</div>
        </>
    )
}

function SquareTrad({n, ...props}:any) {
    return(
        <div></div>
    )
}

function SquareMem({n, ...props}:any) {
    return(
        <div></div>
    )
}

/**
 * Tradiotional fibonacci sequence
 * @param n 
 * @returns 
 */
function fibonacci__traditional(n:number):number {
    if(n <= 2) return 1;

    return fibonacci__traditional(n-1) + fibonacci__traditional(n-2);
}

/**
 * 
 * @param n 
 * @param prevValues 
 * @returns 
 */
function finonacci__memoization(n:number, prevValues:number[]=[]):number {
    if(prevValues[n] != null) return prevValues[n];

    let result;

    if(n <= 2) result = 1;
    else result = finonacci__memoization(n-1, prevValues) + finonacci__memoization(n-2, prevValues);

    prevValues[n] = result;
    return result;
}

// const prevValues:number[] = [];
// /**
//  * 
//  * @param n 
//  * @returns 
//  */
// function square_mem (n:number):number {

//     if(prevValues[n]) return prevValues[n];

//     let result = 0;

//     for(let i=0; i<=n; i++) {
//         for(let j=1; j<=n; j++) {
//             result += 1;
//         }
//     }

//     prevValues[n] = result;

//     return result;
// }

// /**
//  * 
//  * @param n 
//  * @returns 
//  */
// function square_trad (n:number):number {
//     let result = 0;

//     for(let i=0; i<=n; i++) {
//         for(let j=1; j<=n; j++) {
//             result += 1;
//         }
//     }

//     return result;
// }

