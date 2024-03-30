import adjacencyList from "./routes";

export default function dfs(start:string, end:string, displayValue:string=end, visited = new Set()) {
    visited.add(start);
    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {
        if (destination === end) { 
            console.log(`DFS found a route to ${displayValue}!`);
            return `DFS found a route to ${displayValue}!`;
        }
        
        if (!visited.has(destination)) {
            dfs(destination, end, displayValue, visited);
        }
    }
    // console.log(`DFS could not find a route to ${displayValue}!`)
    // return `DFS could not find a route to ${displayValue}!`
}