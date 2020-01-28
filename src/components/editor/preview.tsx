import React from 'react'
import { useSelector } from 'react-redux';

const Preview: React.FC = () => {
  const savedThemeImageSrc = useSelector(
    (state: any) => state.themeImageSrc
  );

  const themeImageSrc = savedThemeImageSrc ?
    savedThemeImageSrc
    :
    ''

  return (
    <section id="previewContainer">
      <img src={themeImageSrc} />
    </section>
  )
};

export default Preview;
