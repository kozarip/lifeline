import Point from "components/editor/controllers/point";

export const THEMES = [
  {
    image: require('images/themes/theme1.jpg'),
    value: 0,
    stationPositions: [
      new Point(10, 20),
      new Point(100, 20),
      new Point(200, 20),
      new Point(300, 20),
      new Point(400, 20),
      new Point(10, 500),
      new Point(100, 500),
      new Point(200, 500),
      new Point(300, 500),
    ]
  },
  {
    image: require('images/themes/theme2.png'),
    value: 1,
    stationPositions: [
      new Point(10, 20),
      new Point(50, 20),
      new Point(100, 20),
      new Point(150, 20),
      new Point(200, 20),
      new Point(10, 100),
      new Point(50, 100),
      new Point(100, 100),
      new Point(150, 100),
    ]
  }
]
