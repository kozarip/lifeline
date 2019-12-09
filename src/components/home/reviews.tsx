import React from 'react'
import { Element } from 'react-scroll'
import Slider from 'react-slick'

const Reviews: React.FC = () => {
  return (
    <Element name="reviews" className="homeBox reviesBox">
      <h2 className="boxTitle">Rólunk mondtátok / Vélemények</h2>
      <div className="testimonialContainer">
        <img className="quote" src={require('../../images/quote.png')} />
        <Slider
          className="narrowHomeBox"
          autoplay={true}
          autoplaySpeed={8000}
          infinite={true}
          arrows={false}
          accessibility={true}
          dots={true} >
          <div>
            <div className="testimonial">
              <blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt.</blockquote>
              <span className="author">John</span>
            </div>
          </div>
          <div>
            <div className="testimonial">
              <blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt.</blockquote>
              <span className="author">John</span>
            </div>
          </div>
          <div>
            <div className="testimonial">
              <blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet libero non neque vulputate tincidunt.</blockquote>
              <span className="author">John</span>
            </div>
          </div>
        </Slider>
        </div>
    </Element>
  )
}

export default Reviews;
