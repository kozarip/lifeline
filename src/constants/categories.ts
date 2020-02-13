import { ICategories } from 'interfaces/IStationFilter';
import { CategoriesDictonary } from 'enums/station';

import bornImage from 'images/categories/born.png';
import schoolImage from 'images/categories/school.png';
import marriageImage from 'images/categories/marriage.png';


export const CATEGORIES: ICategories[] =
  [
    {
      name: CategoriesDictonary.born,
      image: bornImage,
    },
    {
      name: CategoriesDictonary.school,
      image: schoolImage,
    },
    {
      name: CategoriesDictonary.marriage,
      image: marriageImage,
    },
  ];
