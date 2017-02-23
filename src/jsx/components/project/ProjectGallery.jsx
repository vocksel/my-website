import React, { Component } from 'react';

import styles from './ProjectGallery.scss';
import Slider from 'react-slick';

export default class ProjectGallery extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,

      fade: true,
      draggable: false,

      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };

    return (
      <Slider className={styles.base} {...settings}>
        {this.props.images.map((image, index) =>
          <div key={index} style={{ backgroundImage: `url(${image})` }} />
        )}
      </Slider>
    );
  }
}
