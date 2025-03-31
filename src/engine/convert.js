import unitDefs from '../data/unitDefs.js';

export class UnitConverter {
    constructor() {
        console.log("UnitConverter initialized");
        this.conversionFactors = new Map();
        this.visited = new Set();
        this.cachedMetrics = new Map();
    }

    /**
     * Private method to recursively find conversion factors.
     * @param {object} metrics - The metrics definitions for the given metric type.
     * @param {string} currentMetric - The current metric being processed.
     * @param {number} currentFactor - The accumulated conversion factor.
     */
    #findFactor(metrics, currentMetric, currentFactor) {
        if (this.visited.has(currentMetric)) return;
        this.visited.add(currentMetric);

        // console.log(`Visiting metric: ${currentMetric}, current factor: ${currentFactor}`);
        this.conversionFactors.set(currentMetric, currentFactor);
        // console.log("Conversion factors so far: ", this.conversionFactors);

        const metricDef = metrics[currentMetric];
        if (metricDef) {
            const nextMetric = metricDef.convertTo;
            const factor = metricDef.factor;
            this.#findFactor(metrics, nextMetric, currentFactor * factor);
        }

        for (const [key, value] of Object.entries(metrics)) {
            if (value.convertTo === currentMetric) {
                this.#findFactor(metrics, key, currentFactor / value.factor);
            }
        }
    }

    /**
     * Returns conversion factors from the given metric to all other metrics in the same metric type.
     * @param {string} metricType - The type of metric (e.g., "Length", "Weight").
     * @param {string} metric - The metric to convert from (e.g., "m", "kg").
     * @returns {object} - An object where keys are metrics and values are conversion factors from the given metric.
     */
    getConversionFactorToOthers(metricType, metric) {
        // trim metricType and metric to remove any leading or trailing spaces
        metricType = metricType.trim();
        metric = metric.trim();
        const key = metricType + "_" + metric;
        // Check if the conversion factors are already cached
        if (this.cachedMetrics.has(key)) {
            console.log("Returning cached conversion for : '", metricType, "', '", metric, "'");
            return this.cachedMetrics.get(key);
        }
        const metrics = unitDefs[metricType];
        if (!metrics) {
            throw new Error(`Invalid metric type: ${metricType}`);
        }

        // Dynamically add missing metrics by iterating through `convertTo`
        for (const [key, value] of Object.entries(metrics)) {
            if (value.convertTo && !metrics[value.convertTo]) {
                metrics[value.convertTo] = {
                    convertTo: key,
                    factor: 1 / value.factor
                };
            }
        }

        if (!metrics[metric]) {
            throw new Error(`Invalid metric: ${metric} in metric type: ${metricType}`);
        }

        console.log(`Running conversion for : '${metricType}', '${metric}' `);

        this.conversionFactors = new Map();
        this.visited = new Set();

        this.#findFactor(metrics, metric, 1);
        this.cachedMetrics.set(key, this.conversionFactors);
        this.conversionFactors.delete(metric); // Remove the original metric from the conversion factors
        // console.log("Conversion factors for '", metricType, "', '", metric, "' are: ", this.conversionFactors);
        return this.conversionFactors;
    }
}

export const converter = new UnitConverter(); // Create an instance of UnitConverter

// Example usage:
// const converter = new UnitConverter();
// console.log(converter.getConversionFactorToOthers("Length", "m"));
// Output: { m: 1, mm: 1000, cm: 100, km: 0.001, ... }
