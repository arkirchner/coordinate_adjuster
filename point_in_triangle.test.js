import pointInTriangle from './point_in_triangle';

describe('can check if a point is in a triangle', () => {
  const triangePoints = [[1, 1], [1, 3], [3, 3]];

  test('Point is in the triangle.', () => {
    expect(pointInTriangle([2, 2.5], ...triangePoints)).toBeTruthy();
  });

  test('Point is outside of the triangle', () => {
    expect(pointInTriangle([3, 2], ...triangePoints)).toBeFalsy();
  });
});
