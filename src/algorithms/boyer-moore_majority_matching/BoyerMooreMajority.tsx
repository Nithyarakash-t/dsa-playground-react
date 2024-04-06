export default function BoyerMooreMajority() {
    const arr = [2, 2, 1, 1, 1, 2, 2 ];
    const result = boyreMooreMatching(arr);
    return (
        <>
            <div className="template__wrap">
                <div className="template__section">
                    <h3>Memoization fibonacci</h3>
                    <div className="template__form">
                        <div className='binarySearch__array'>
                            {arr.map(item=> <span>{item}</span>)}
                        </div>
                    </div>
                    <div className="template__results">
                        <div>
                            <h4>Majority element</h4>
                            <div>{result}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function boyreMooreMatching(arr:number[]):number | null{
    let candidate:number | null = null;
    let count = 0;

    arr.forEach(num => {
        if(count === 0) candidate = num;

        if(candidate === num) count++;
        else count--;
    });

    return candidate;
}