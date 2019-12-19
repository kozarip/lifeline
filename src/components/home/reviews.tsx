import React from 'react'
import Slider from 'react-slick'

const Reviews: React.FC = () => {
  return (
    <section id="reviewsContainer"
      className="componentContainer reviewsContainer">
      <h2 className="componentTitle">Rólunk mondtátok / Vélemények</h2>
      <div className="testimonialsBox">
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
    </section>
  )
}

export default Reviews;
