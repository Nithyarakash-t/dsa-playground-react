import adjacencyList from "./routes";

export default function dfs(start:string, end:string, visited = new Set()):string {
    visited.add(start);
    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {
        if (destination === end) { 
            console.log(`DFS found a route from ${start} to ${end}!`);
            return `true`;
        }
        if (!visited.has(destination)) {
            return dfs(destination, end, visited);
        }
    }
    // console.log(`DFS could not find a route to ${displayValue}!`)
    return `false`;
}