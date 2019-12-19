import { IStation } from "interfaces/IStation";
import { Categories } from "enums/station";

import babeImage from 'images/stations/babe.png';
import crossImage from 'images/stations/cross.png';
import churchImgae from 'images/stations/church.jpg';
import schoolImage from 'images/stations/student.png';

export const STATIONS: IStation[] = [
  {
    categories: [Categories.born],
    image: babeImage,
    tags: ['baba', 'cuki', 'születés'],
  },
  {
    categories: [Categories.born, Categories.marriage],
    image: crossImage,
    tags: ['kereszt', 'kereszténység', 'születés'],
  },
  {
    categories: [Categories.marriage],
    image: churchImgae,
    tags: ['templom', 'kereszténység'],
  },
  {
    categories: [Categories.school],
    image: schoolImage,
    tags: ['diák', 'cuki'],
  },
]
