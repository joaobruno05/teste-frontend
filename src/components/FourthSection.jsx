import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import image1 from '../images/blog_image_1.svg';
import image2 from '../images/bloco_image_2.svg';
import image3 from '../images/bloco_image_3.svg';
import image4 from '../images/bloco_image_4.svg';

import '../styles/fourth-section.css';

export default function FourthSection() {
  return (
    <section id="blog" className="section-four">
      <h2>Read Our Blog</h2>
      <p className="text-fourth-section">
        Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts.
      </p>
      <Splide
        className="block-images container"
        options={{
          rewind: true,
          fixedWidth: '30rem',
          gap: '-7em',
          keyboard: true,
        }}
      >
        <SplideSlide>
          <div className="blocks block-one">
            <img src={image1} alt="block-one" />
            <h4>Quick-start guide to nuts and seeds</h4>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="blocks block-two">
            <img src={image2} alt="block-two" />
            <h4>Nutrition: Tips for Improving Your Health</h4>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="blocks block-three">
            <img src={image3} alt="block-three" />
            <h4>The top 10 benefits of eating healthy</h4>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="blocks block-four">
            <img src={image4} alt="block-four" />
            <h4>Which foods are harmful to Health?</h4>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
}
