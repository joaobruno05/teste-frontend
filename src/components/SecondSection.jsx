import React from 'react';
import comida1 from '../images/comida_1.svg';
import comida2 from '../images/comida_2.svg';
import comida3 from '../images/comida_3.svg';
import comida4 from '../images/comida_4.svg';

import '../styles/second-section.css';

export default function SecondSection() {
  return (
    <section className="section-two">
      <h2>Our Best Recipes</h2>
      <p className="text-second-section">
        Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className="cards">
        <div className="food-card">
          <div className="img-card">
            <img src={comida1} alt="Broccoli Salad with Bacon" />
          </div>
          <div className="info-cards">
            <h3>Broccoli Salad with Bacon</h3>
            <button className="btn btn-outline-success btn-lg" type="button">See recipe</button>
          </div>
        </div>

        <div className="food-card">
          <div className="img-card">
            <img src={comida2} alt="Classic Beef Burgers" />
          </div>
          <div className="info-cards">
            <h3>Classic Beef Burgers</h3>
            <button className="btn btn-outline-success btn-lg" type="button">See recipe</button>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="food-card">
          <div className="img-card">
            <img src={comida3} alt="Classic Potato Salad" />
          </div>
          <div className="info-cards">
            <h3>Classic Potato Salad</h3>
            <button className="btn btn-outline-success btn-lg" type="button">See recipe</button>
          </div>
        </div>

        <div className="food-card">
          <div className="img-card">
            <img src={comida4} alt="Cherry Cobbler on the Grill" />
          </div>
          <div className="info-cards">
            <h3>Cherry Cobbler on the Grill</h3>
            <button className="btn btn-outline-success btn-lg" type="button">See recipe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
