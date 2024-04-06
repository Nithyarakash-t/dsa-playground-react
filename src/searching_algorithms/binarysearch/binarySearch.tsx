import { useState } from 'react';
import './binarySearch.scss';

export default function BinarySearch() {
    const [search, setSearch] = useState(7);
    const array:number[] = [1,2,3,4,5,7,9,10,13,14,15,18];

    return (
        <>
            <div className='binarySearch__wrap'>
                <div className='binarySearch__array'>
                    {array.map(item=> <span>{item}</span>)}
                </div>
                <div className='binarySearch__form'>
                    <label htmlFor='binarySearch_form'></label>
                    <input type='number' id='binarySearch_form' placeholder='Enter number to search' value={search} onInput={event=>setSearch(+event.currentTarget.value)}></input>
                </div>
                <div className='binarySearch__results'>
                    <div>
                        <h3>Recursion</h3>
                        <BinarySearchRecursion list={array} target={search}/>
                    </div>
                    <div>
                        <h3>Loop</h3>
                        <BinarySearchLoop list={array} target={search}/>
                    </div>
                </div>
            </div>
        </>
    )
}

function BinarySearchRecursion({list, target, ...props}:any) {
    const pos = binarySearchRec(list, 0, list.length-1,target);
    const result = pos === -1 ? `${target} not found` : `${target} found at ${pos+1}`;    
    return (
        <>
        <div>{result}</div>
        </>
    )
}

function BinarySearchLoop({list, target, ...props}:any) {
    const pos = binarySearchItr(list, target);
    const result = pos === -1 ? `${target} not found` : `${target} found at ${pos+1}`;

    return (
        <>
        <div>{result}</div>
        </>
    )
}


// Program to implement iterative Binary Search
// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
function binarySearchItr(arr:number[], x:number):number { 
	let l = 0;
	let r = arr.length - 1;
	let mid;
	while (r >= l) {
		mid = l + Math.floor((r - l) / 2);

		// If the element is present at the middle
		// itself
		if (arr[mid] === x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		if (arr[mid] > x)
			r = mid - 1;
			
		// Else the element can only be present
		// in right subarray
		else
			l = mid + 1;
	}

	// We reach here when element is not
	// present in array
	return -1;
}

// JavaScript program to implement recursive Binary Search
// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
function binarySearchRec(arr:number[], l:number, r:number, x:number):number{
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		// If the element is present at the middle
		// itself
		if (arr[mid] === x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		if (arr[mid] > x)
			return binarySearchRec(arr, l, mid - 1, x);

		// Else the element can only be present
		// in right subarray
		return binarySearchRec(arr, mid + 1, r, x);
	}

	// We reach here when element is not
	// present in array
	return -1;
}
