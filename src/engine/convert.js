import { Graph, shortestPath, NextWeightFnParams } from 'graph-data-structure';

const cachedDefs = new Map();

async function loadUnitDefs(unitType) {
    try {
        const unitDefs = await import(`../data/unitDefs/${unitType}.json`);
        return unitDefs.default;
    } catch (error) {
        throw new Error(`Unit definitions for ${unitType} not found.`);
    }
}

async function createGraph(unitType) {
    const unitDefs = await loadUnitDefs(unitType);
    const graph = new Graph();
    for (const [unit, def] of Object.entries(unitDefs)) {
        graph.addEdge(unit, def.convertTo, def.factor);
        graph.addEdge(def.convertTo, unit, 1 / def.factor);
    }
    return graph;
}

function multiplyWeightFunction(wp) {
    if (wp.currentPathWeight === undefined) {
        return wp.edgeWeight;
    }
    return wp.edgeWeight * wp.currentPathWeight;
}

async function getUnitList(unitType) {
    const graph = await createGraph(unitType);
    return graph.nodes;
}

async function createConversionFor(unitType, unit) {
    const graph = await createGraph(unitType);
    const cacheName = unitType + "_" + unit;
    if (cachedDefs.has(cacheName)) {
        return cachedDefs.get(cacheName);
    }
    const conversions = new Map();
    for (const node of graph.nodes) {
        if (node !== unit) {
            try {
                const result = shortestPath(graph, unit, node, multiplyWeightFunction);
                if (result.weight === undefined) {
                    continue;
                }
                conversions.set(node, result.weight);
            } catch (e) {
                console.log("No path found for: ", node);
            }
        }
    }
    cachedDefs.set(cacheName, conversions);
    return conversions;
}

export {
    getUnitList,
    createConversionFor
};
