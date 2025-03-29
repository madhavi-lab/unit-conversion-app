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
        for (const key in result) {
            result[key] = Math.round(result[key] * 100000) / 100000;
        }
        expect(result.cm).toBe(100);
        expect(result.mm).toBe(1000);
        expect(result.km).toBe(0.001);
        expect(result.inch).toBe(39.37008);
        expect(result.foot).toBe(3.28084);
        expect(result.yard).toBe(1.09361);
        expect(result.mile).toBe(0.00062);
    });

    test('should return correct conversion factors for another valid metric', () => {
        const result = converter.getConversionFactorToOthers('Weight', 'kg'); // Use instance method
        console.log("conversion to kg is : ", result);
        for (const key in result) {
            result[key] = Math.round(result[key] * 100000) / 100000;
        }
        expect(result.g).toBe(1000);
        expect(result.mg).toBe(1000000);
        expect(result.ton).toBe(0.001);
        expect(result.lb).toBe(2.20462);
        expect(result.oz).toBe(35.27399);
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
