import { expect } from '@jest/globals';
import { UnitConverter } from './convert.js'; // Import UnitConverter class

describe('UnitConverter.getConversionFactorToOthers', () => {
    let converter;

    beforeAll(() => {
        // Any setup that needs to be done once before all tests
        converter = new UnitConverter(); // Create a new instance before each test
    });

    test('should return correct conversion factors for valid metric and metric type', () => {
        const result = converter.getConversionFactorToOthers('Length', 'm'); // Use instance method
        console.log("conversion to m is : ", result);
        for (const [key, val] of result.entries()) {
            const rval = Math.round(result.get(key) * 100000) / 100000
            result.set(key, rval);
        }
        expect(result.get("cm")).toBe(100);
        expect(result.get("mm")).toBe(1000);
        expect(result.get("km")).toBe(0.001);
        expect(result.get("inch")).toBe(39.37008);
        expect(result.get("foot")).toBe(3.28084);
        expect(result.get("yard")).toBe(1.09361);
        expect(result.get("mile")).toBe(0.00062);
    });

    test('should return correct conversion factors for another valid metric', () => {
        const result = converter.getConversionFactorToOthers('Weight', 'kg'); // Use instance method
        console.log("conversion to kg is : ", result);
        for (const [key, val] of result.entries()) {
            const rval = Math.round(result.get(key) * 100000) / 100000
            result.set(key, rval);
        }
        expect(result.get("g")).toBe(1000);
        expect(result.get("mg")).toBe(1000000);
        expect(result.get("ton")).toBe(0.001);
        expect(result.get("lb")).toBe(2.20462);
        expect(result.get("oz")).toBe(35.27399);
    });

    test('should throw an error for invalid metric type', () => {
        expect(() => converter.getConversionFactorToOthers('InvalidType', 'm')).toThrow(
            'Invalid metric type or metric: InvalidType, m'
        );
    });

    test('should throw an error for invalid metric', () => {
        expect(() => converter.getConversionFactorToOthers('Length', 'invalidMetric')).toThrow(
            'Invalid metric type or metric: Length, invalidMetric'
        );
    });

});
