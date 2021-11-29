import React, { useState } from 'react';
import Illustration from '../images/Illustration.svg';
import '../styles/first-section.css';

export default function FirstSection() {
  const [inputSearch, setInputSearch] = useState('');
  const [disable, setDisable] = useState(true);

  const handleInputSearch = ({ target }) => {
    const { value } = target;
    setInputSearch(value);
    if (inputSearch !== null) {
      setDisable(false);
    }
  };

  const handleKeyUp = () => {
    if (inputSearch === '') {
      setDisable(true);
    }
  };

  return (
    <section className="section-one row">
      <div className="first-section col-4">
        <h1 id="healthy-recipes">Ready for Trying a new recipe?</h1>
        <div className="search-recipes">
          <div className="input-group input-group-lg">
            <input
              className="form-control border border-primary"
              type="text"
              name="inputSearch"
              value={inputSearch}
              placeholder="Search healthy recipes"
              onChange={handleInputSearch}
              onKeyUp={handleKeyUp}
            />
          </div>
          <div className="btn-search-recipes">
            <button
              className="btn btn-lg"
              type="button"
              disabled={disable}
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>

      </div>

      <div className="illustration-img col-8">
        <img
          src={Illustration}
          alt="Illustration"
        />
      </div>
    </section>
  );
}
