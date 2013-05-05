// Random line
var POINTS1 = [
  {x: 0, y: 0},
  {x: 62, y: 4},
  {x: 102, y: 44},
  {x: 198, y: 28},
  {x: 214, y: 100},
  {x: 326, y: 76},
  {x: 406, y: 92},
  {x: 438, y: 124},
  {x: 502, y: 76},
  {x: 574, y: 108},
  {x: 638, y: 140}
];

// Road bike handlebar contour
var POINTS2 = [
  {x: 31, y: 14},
  {x: 32, y: 15},
  {x: 33, y: 15},
  {x: 34, y: 15},
  {x: 35, y: 15},
  {x: 36, y: 15},
  {x: 38, y: 16},
  {x: 39, y: 16},
  {x: 40, y: 16},
  {x: 42, y: 17},
  {x: 43, y: 17},
  {x: 44, y: 17},
  {x: 45, y: 18},
  {x: 47, y: 19},
  {x: 48, y: 19},
  {x: 49, y: 20},
  {x: 50, y: 20},
  {x: 51, y: 21},
  {x: 52, y: 22},
  {x: 53, y: 23},
  {x: 54, y: 23},
  {x: 55, y: 24},
  {x: 56, y: 25},
  {x: 57, y: 26},
  {x: 58, y: 27},
  {x: 59, y: 28},
  {x: 60, y: 29},
  {x: 60, y: 30},
  {x: 61, y: 31},
  {x: 61, y: 32},
  {x: 62, y: 33},
  {x: 63, y: 34},
  {x: 63, y: 35},
  {x: 64, y: 36},
  {x: 64, y: 37},
  {x: 64, y: 38},
  {x: 65, y: 40},
  {x: 65, y: 41},
  {x: 66, y: 43},
  {x: 66, y: 44},
  {x: 66, y: 45},
  {x: 66, y: 47},
  {x: 66, y: 48},
  {x: 66, y: 49},
  {x: 66, y: 51},
  {x: 66, y: 53},
  {x: 66, y: 54},
  {x: 66, y: 55},
  {x: 66, y: 56},
  {x: 66, y: 58},
  {x: 65, y: 59},
  {x: 65, y: 60},
  {x: 65, y: 61},
  {x: 64, y: 62},
  {x: 64, y: 64},
  {x: 63, y: 64},
  {x: 63, y: 65},
  {x: 62, y: 66},
  {x: 62, y: 68},
  {x: 61, y: 69},
  {x: 61, y: 70},
  {x: 60, y: 71},
  {x: 59, y: 72},
  {x: 58, y: 73},
  {x: 58, y: 74},
  {x: 57, y: 75},
  {x: 55, y: 76},
  {x: 55, y: 77},
  {x: 53, y: 78},
  {x: 53, y: 79},
  {x: 51, y: 80},
  {x: 51, y: 81},
  {x: 50, y: 82},
  {x: 49, y: 82},
  {x: 48, y: 83},
  {x: 47, y: 84},
  {x: 47, y: 85},
  {x: 45, y: 85},
  {x: 45, y: 86},
  {x: 43, y: 87},
  {x: 42, y: 88},
  {x: 41, y: 89},
  {x: 40, y: 90},
  {x: 39, y: 90},
  {x: 38, y: 91},
  {x: 37, y: 92},
  {x: 36, y: 93},
  {x: 34, y: 94},
  {x: 33, y: 94},
  {x: 32, y: 95},
  {x: 30, y: 96},
  {x: 29, y: 96},
  {x: 28, y: 97},
  {x: 27, y: 98},
  {x: 26, y: 98},
  {x: 24, y: 99},
  {x: 23, y: 100},
  {x: 22, y: 100},
  {x: 20, y: 101},
  {x: 19, y: 101},
  {x: 18, y: 102},
  {x: 17, y: 102},
  {x: 16, y: 103},
  {x: 15, y: 103},
  {x: 13, y: 103},
  {x: 12, y: 104},
  {x: 11, y: 104},
  {x: 10, y: 105},
  {x: 9, y: 105},
  {x: 8, y: 106},
  {x: 6, y: 106},
  {x: 5, y: 106},
  {x: 3, y: 107},
  {x: 2, y: 107},
  {x: 1, y: 107},
  {x: 0, y: 108},
  {x: -1, y: 108},
  {x: -3, y: 108},
  {x: -4, y: 109},
  {x: -5, y: 109},
  {x: -6, y: 109},
  {x: -8, y: 109},
  {x: -9, y: 110},
  {x: -10, y: 110},
  {x: -11, y: 110},
  {x: -14, y: 110},
  {x: -15, y: 110},
  {x: -16, y: 110},
  {x: -18, y: 111},
  {x: -19, y: 111},
  {x: -20, y: 111},
  {x: -22, y: 111},
  {x: -23, y: 111},
  {x: -24, y: 111},
  {x: -26, y: 111},
  {x: -27, y: 112},
  {x: -28, y: 112},
  {x: -30, y: 112},
  {x: -32, y: 112},
  {x: -33, y: 112},
  {x: -34, y: 112},
  {x: -35, y: 112},
  {x: -36, y: 112},
  {x: -37, y: 113},
  {x: -39, y: 113},
  {x: -40, y: 113},
  {x: -41, y: 113},
  {x: -42, y: 113},
  {x: -43, y: 113},
  {x: -44, y: 113}
];
