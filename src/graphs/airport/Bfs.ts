import adjacencyList from "./routes";

export default function bfs(start:string, end:string, displayValue:string=end) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const airport = queue.shift(); // mutates the queue
        const destinations = adjacencyList.get(airport);

        for (const destination of destinations) {
            if (destination === end)  {
                console.log(`BFS found ${displayValue}!`)
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }      
        }    
    }
}