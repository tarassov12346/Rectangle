import { getRectanglePerimeter } from '../js/rectangle';

test('should perimeter correspond', () => {
    const perimeter=getRectanglePerimeter(2,5);
    expect(perimeter).toBe(14);
});

import { getRectangleArea } from '../js/rectangle';

test('should area correspond', () => {
    const area=getRectangleArea(2,5);
    expect(area).toBe(10);
});

import { getRectangleInfo } from '../js/rectangle';

test('should generate a valid text output', () => {
    jest.spyOn(console, 'log');
    expect(console.log.mock.calls.length).toBe(0);
    getRectangleInfo(2,5);
    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toBe(`The perimeter of a rectangle is 14 and the area is 10`);
    jest.clearAllMocks();
});