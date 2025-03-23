import { describe, expect, test } from '@jest/globals';
import { getUnitList, createConversionFor } from '../engine/convert';

describe('conversion engine', () => {
  test('Length: unit list is loaded correctly', () => {
    const unitList = getUnitList('Length');
    expect(unitList).toContain('m');
    expect(unitList.size).toBeGreaterThan(5);
  });

  test('Area: unit list is loaded correctly', () => {
    const unitList = getUnitList('Area');
    expect(unitList).toContain("sqyard");
    expect(unitList.size).toBeGreaterThan(3);
  });

  test('Length: convert mile to kilometer', () => {
    const c = createConversionFor("Length", "mile");
    console.log("Conversion from mile is : ", c);
    const val = c.get("km") === undefined ? 0 : c.get("km");
    expect(Math.round(val * 1000000) / 1000000).toEqual(1.609344);
  });

  test('Area: convert square meters to square yard', () => {
    const c = createConversionFor("Area", "sqm");
    console.log("Conversion from sqm is : ", c);
    const val = c.get("sqyard");
    expect(val).not.toBeUndefined();
    if (val !== undefined) {
      expect(Math.round(val * 100000) / 100000).toEqual(1.19599);
    }
  });

  test('Area: convert square meters to cent', () => {
    const c = createConversionFor("Area", "sqm");
    const val = c.get("cent");
    expect(val).not.toBeUndefined();
    if (val !== undefined) {
      expect(Math.round(val * 10000) / 10000).toEqual(0.0247);
    }
  });

  test('Non existent metric: check conversion of non existent node', () => {
    const c = createConversionFor("Area", "sqm");
    const val = c.get("centos");
    expect(val).toBeUndefined();
  });
});
