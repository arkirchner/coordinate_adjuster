// Base implementation http://blackpawn.com/texts/pointinpoly/default.html

function vector(from, to) { return [to[0] - from[0], to[1] - from[1]]; }

function dotProdurct(u, v) { return u[0] * v[0] + u[1] * v[1]; }

// Returns true if point P inside the triangle with vertices at A, B and C
// representing 2D vectors and points as [x,y]. (Barycentric Technique)
export default function pointInTriangle(P, A, B, C) {
  // Compute vectors
  const vector0 = vector(A, C);
  const vector1 = vector(A, B);
  const vector2 = vector(A, P);

  // Compute dot products
  const dotProdurct00 = dotProdurct(vector0, vector0);
  const dotProdurct01 = dotProdurct(vector0, vector1);
  const dotProdurct02 = dotProdurct(vector0, vector2);
  const dotProdurct11 = dotProdurct(vector1, vector1);
  const dotProdurct12 = dotProdurct(vector1, vector2);

  // Compute barycentric coordinates
  const invertedDenominator = 1.0 / (dotProdurct00 * dotProdurct11 - dotProdurct01 * dotProdurct01);
  const u = (dotProdurct11 * dotProdurct02 - dotProdurct01 * dotProdurct12) * invertedDenominator;
  const v = (dotProdurct00 * dotProdurct12 - dotProdurct01 * dotProdurct02) * invertedDenominator;

  // Check if point is in triangle
  return (u >= 0) && (v >= 0) && (u + v < 1);
}
