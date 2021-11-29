import React, { useState } from 'react';
import finalBlock from '../images/bloco_final_image.svg';

import '../styles/fifth-section.css';

export default function FifthSection() {
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(true);

  const handleInputEmail = ({ target }) => {
    const { value } = target;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    setEmail(value);
    if (emailRegex.test(email)) {
      setDisable(false);
    }
  };

  return (
    <section id="join" className="section-five">
      <div className="fifth-section">
        <h2>Join our membership to get special offer</h2>
        <div className="join">
          <div className="input-group input-group-lg">
            <input
              className="form-control border border-primary"
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email address"
              onChange={handleInputEmail}
            />
          </div>
          <div className="btn-join">
            <button
              className="btn btn-lg"
              type="button"
              disabled={disable}
            >
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="final-block-image">
        <img
          src={finalBlock}
          alt="final-block"
        />
      </div>
      <div className="top">
        <a href="#healthy-recipes">
          <i className="fas fa-arrow-up fa-lg" />
        </a>
      </div>
    </section>
  );
}
