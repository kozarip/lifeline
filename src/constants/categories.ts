import { ICategories } from "interfaces/IStation";
import { Categories } from "enums/station";

import bornImage from 'images/categories/born.png';
import schoolImage from 'images/categories/school.png';
import marriageImage from 'images/categories/marriage.png';


export const CATEGORIES: ICategories[] =
  [
    {
      name: Categories.born,
      image: bornImage,
    },
    {
      name: Categories.school,
      image: schoolImage,
    },
    {
      name: Categories.marriage,
      image: marriageImage,
    },
  ];
