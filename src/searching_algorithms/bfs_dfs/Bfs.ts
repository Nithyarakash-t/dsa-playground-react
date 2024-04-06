import adjacencyList from "./routes";

export default function bfs(start:string, end:string):string {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const airport = queue.shift(); // mutates the queue
        const destinations = adjacencyList.get(airport);

        for (const destination of destinations) {
            if (destination === end)  {
                console.log(`BFS found a route from ${start} to ${end}!`);
                return `true`;
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }      
        }    
    }

    // console.log(`BFS could not find a route to ${displayValue}!`);
    return `false`;
}