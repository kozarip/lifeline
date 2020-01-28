import { IStation } from 'interfaces/IStation';
import { CategoriesDictonary, TagsDictonary } from 'enums/station';

import babeImage from 'images/stations/babe.png';
import crossImage from 'images/stations/cross.png';
import churchImgae from 'images/stations/church.jpg';
import schoolImage from 'images/stations/student.png';

export const STATIONS: IStation[] = [
  {
    categories: [CategoriesDictonary.born],
    image: babeImage,
    tags: [TagsDictonary.babe, TagsDictonary.cute, TagsDictonary.born],
  },
  {
    categories: [CategoriesDictonary.born, CategoriesDictonary.marriage],
    image: crossImage,
    tags: [TagsDictonary.cross, TagsDictonary.christianity, TagsDictonary.born],
  },
  {
    categories: [CategoriesDictonary.marriage],
    image: churchImgae,
    tags: [TagsDictonary.church, TagsDictonary.christianity],
  },
  {
    categories: [CategoriesDictonary.school],
    image: schoolImage,
    tags: [TagsDictonary.student, TagsDictonary.cute],
  },
]
