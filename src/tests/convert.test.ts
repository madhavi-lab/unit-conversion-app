import { describe, expect, test } from '@jest/globals';
import { getUnitList, createConversionFor } from '../engine/convert';

describe('conversion engine', () => {
  test('Distance: unit list is loaded correctly', () => {
    expect(getUnitList('distance')).toContain('m');
    expect(getUnitList('distance').size).toBeGreaterThan(5)
  });

  test('Area: unit list is loaded correctly', () => {
    expect(getUnitList('area')).toContain("sqyard")
    expect(getUnitList('area').size).toBeGreaterThan(3)
  });

  test('Distance: convert mile to kilometer', () => {
    const c: Map<string, number> = createConversionFor("distance", "mile");
    const val = c.get("km") === undefined ? 0 : c.get("km");
    expect(Math.round(val * 1000000) / 1000000).toEqual(1.609344);
  });

  test('Area: convert square meters to square yard', () => {
    const c: Map<string, number> = createConversionFor("area", "sqm");
    const val: number | undefined = c.get("sqyard");
    expect(val).not.toBeUndefined();
    if (val !== undefined) {
      expect(Math.round(val * 100000) / 100000).toEqual(1.19599);
    }
  });

  test('Area: convert square meters to cent', () => {
    const c: Map<string, number> = createConversionFor("area", "sqm");
    var val: number | undefined = c.get("cent");
    expect(val).not.toBeUndefined();
    if (val !== undefined) {
      expect(Math.round(val * 10000) / 10000).toEqual(0.0247);
    }
  });

  test('Non existent metric: check conversion of non existent node', () => {
    const c: Map<string, number> =  createConversionFor("area", "sqm");
    var val: number | undefined = c.get("centos");
    expect(val).toBeUndefined();
  });


});
