import Point from "components/editor/controllers/point";

export const THEMES = [
  {
    image: require('images/themes/theme1.jpg'),
    value: 0,
    stationPositions: [
      new Point(10, 20),
      new Point(200, 250),
      new Point(300, 450),
      new Point(380, 400),
      new Point(450, 400),
      new Point(10, 800),
      new Point(100, 800),
      new Point(20, 800),
      new Point(40, 800),
    ]
  },
  {
    image: require('images/themes/theme2.png'),
    value: 1,
    stationPositions: [
      new Point(10, 20),
      new Point(200, 250),
      new Point(300, 450),
      new Point(380, 400),
      new Point(450, 400),
      new Point(10, 800),
      new Point(100, 800),
      new Point(20, 800),
      new Point(40, 800),
    ]
  }
]
