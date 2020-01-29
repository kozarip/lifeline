import React from 'react'
import { useSelector } from 'react-redux';

const Preview: React.FC = () => {
  const { themeImageSrc, stationNumber }  = useSelector(
    (state: any) => state
  );

  const currentThemeImageSrc = themeImageSrc ?
    themeImageSrc
    :
    ''

  return (
    <section id="previewContainer">
      <img src={currentThemeImageSrc} />
    </section>
  )
};

export default Preview;
