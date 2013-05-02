/*globals _*/

/*
 * waringo-henrich-smooth.js
 * https://github.com/davesque/waringo-henrich-smooth
 *
 * Implementation code is subject to the following copyright and license:
 * Copyright (c) 2013 David Sanders
 * Licensed under the MIT license.
 *
 * Functions for smoothing a path of 2D coordinates using the method described
 * in the following article:
 *
 * Smoothing of Piecewise Linear Paths
 * Michel Waringo and Dominik Henrich
 * University of Bayreuth, Germany
 * International Journal of Advanced Robotic Systems, Vol.5, No. 3 (2008)
 *
 * http://cdn.intechopen.com/pdfs/4283/InTech-Smoothing_of_piecewise_linear_paths.pdf
 */


/**
 * Returns the distance between a point `p2` and the line formed by two points
 * `p1` and `p3`.
 */
function pointToLineDistance(p1, p2, p3) {
  var d;
  var a, b, C;

  if ( p1.x === p3.x ) {
    // Special case for slope == infinity
    d = p2.x - p1.x;
  } else if ( p1.y === p3.y ) {
    // Special case for slope == 0
    d = p2.y - p1.y;
  } else {
    // Normal case
    a = p3.y - p1.y;
    b = p3.x - p1.x;
    C = p1.y;
    d = Math.abs(a * p2.x + b * p2.y + C) / Math.sqrt(a * a + b * b);
  }

  return Math.abs(d);
}


/**
 * Finds the indexes of neighboring, non-removed points for the point at the
 * given index in the given coordinate list.
 */
function findNeighborhood(coords, j) {
  var removed, left, right, i, k;

  if ( _.isEmpty(coords) ) return [-1, -1];

  if ( j < 0 ) j = 0;
  else if ( j >= coords.length ) j = coords.length - 1;

  removed = _.pluck(coords, "remove");

  left = _.first(removed, j);
  right = _.rest(removed, j + 1);

  i = _.lastIndexOf(left, false);
  k = _.indexOf(right, false);

  if ( k !== -1 ) k += j + 1;

  return [i, k];
}

/**
 * Smooths a list of 2D coordinates.
 */
function waringoHenrichSmooth(coords) {
  // Get a copy of the original path
  var origCoords = _.map(coords, _.clone);

  // Mark all points as not having been removed
  _.each(coords, function(c) { c.remove = false; });

  return coords;
}
