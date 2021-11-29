import React from 'react';
import services from '../images/bloco_services.svg';
import '../styles/third-section.css';

export default function ThirdSection() {
  return (
    <section className="section-three">
      <div>
        <img src={services} alt="bloco-services" />
      </div>
      <div className="text-third-section">
        <h2>The best services ready To serve you</h2>
        <p>
          Far far away, behind the word mountains,
          far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the Semantics,
          a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies
          it with the necessary regelialia.
        </p>
        <button
          className="btn"
          type="button"
        >
          Know More
        </button>
      </div>
    </section>
  );
}
