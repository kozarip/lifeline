import React from 'react'

class Preview extends React.Component{
  constructor(props: any) {
    super(props);

  }

  render () {
    return (
      <section id="previewContainer">
        <img src={require('../../images/themes/theme1.jpg')} />
      </section>
    )
  }
};

export default Preview;
