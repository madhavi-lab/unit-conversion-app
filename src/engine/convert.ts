import { Graph, shortestPath, NextWeightFnParams } from 'graph-data-structure';
import unitDefs from './unitDefs.json';

const cachedDefs: Map<string, Map<string, number>> = new Map();

function createGraph(unitType: keyof typeof unitDefs) : Graph {
    const graph = new Graph();
    for (const [unit, def] of Object.entries(unitDefs[unitType])) {
        graph.addEdge(unit, def.convertTo, def.factor);
        graph.addEdge(def.convertTo, unit, 1 / def.factor);
    }
    // var serialized = serializeGraph(graph);
    // console.log("Serialized graph is : ", serialized)
    return graph;
}

function multiplyWeightFunction(wp: NextWeightFnParams): number {
    if (wp.currentPathWeight === undefined) {
        return wp.edgeWeight;
    }
    return wp.edgeWeight * wp.currentPathWeight;
}

function getUnitList(unitType: keyof typeof unitDefs): Set<string> {
    const graph = createGraph(unitType);
    return graph.nodes;
}

function createConversionFor(unitType: keyof typeof unitDefs, unit: string): Map<string, number> { 
    const graph = createGraph(unitType);
    // console.log("Graph created with nodes : ", graph.nodes);
    // console.log("Graph created is : ", graph);
    const cacheName = unitType + "_" + unit;
    if (cachedDefs.has(cacheName)) {
        console.log("Returning cached value for: ", cacheName);
        return cachedDefs.get(cacheName) as Map<string, number>;
    }
    var conversions: Map<string, number> = new Map();
    for (const node of graph.nodes) {
        if(node !== unit) {
            try {
                var result = shortestPath(graph, unit, node, multiplyWeightFunction);
                if(result.weight === undefined) {
                    console.log("Failed to compute conversion for: ", node);
                    continue;
                }
                conversions.set(node,result.weight);
            } catch (e: any){
                console.log("No path found for: ", node);
            }
        }
    }
    console.log("Conversions are: ", conversions)
    cachedDefs.set(cacheName, conversions);
    return conversions;
}

export {
    getUnitList, 
    createConversionFor
}
