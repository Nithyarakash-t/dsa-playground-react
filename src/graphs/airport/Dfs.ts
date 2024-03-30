import adjacencyList from "./routes";

export default function dfs(start:string, end:string, displayValue:string=end, visited = new Set()):string {
    visited.add(start);
    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {
        if (destination === end) { 
            console.log(`DFS found a route to ${displayValue}!`);
            return `true`;
        }
        if (!visited.has(destination)) {
            return dfs(destination, end, displayValue, visited);
        }
    }
    // console.log(`DFS could not find a route to ${displayValue}!`)
    return `false`;
}