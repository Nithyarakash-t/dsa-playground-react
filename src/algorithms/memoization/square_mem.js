const prevValues = [];

export default function square_mem (n) {

    if(prevValues[n]) return prevValues[n];

    let result = 0;

    for(let i=0; i<=n; i++) {
        for(let j=1; j<=n; j++) {
            result += 1;
        }
    }

    prevValues[n] = result;

    return result;
}

square_mem(91);