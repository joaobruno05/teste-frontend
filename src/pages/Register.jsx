import React, { useState } from 'react';
import getAdressData from '../services/APIcorreios';
import '../styles/register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [CPF, setCPF] = useState('');
  const [zipCode, setZipeCode] = useState('');
  const [road, setRoad] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [UF, setUF] = useState('');
  const [disabled, setDisabled] = useState(true);

  const isValidZipCode = (/^[0-9]{5}-?[0-9]{3}$/).test(zipCode);
  const isValidCPF = (/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/).test(CPF);
  const isValidBirthDate = (/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/).test(birthDate);
  const nameCharacters = name.length > 10;

  const validForm = () => {
    if (nameCharacters && isValidZipCode && isValidCPF && isValidBirthDate) {
      setDisabled(false);
    }
  };

  const fillInAdressData = () => {
    const fetchAPI = async () => {
      const {
        logradouro,
        bairro,
        localidade,
        uf,
      } = await getAdressData(zipCode).then((value) => value);

      validForm();
      setRoad(logradouro);
      setNeighborhood(bairro);
      setCity(localidade);
      setUF(uf);
    };
    return fetchAPI();
  };

  const sendUserInformations = () => {
    const objectInfo = {
      name,
      birthDate,
      CPF,
      zipCode,
      road,
      neighborhood,
      city,
      UF,
    };
    localStorage.setItem(`User: ${name}`, JSON.stringify(objectInfo));
    document.cookie = `User: ${name} = ${JSON.stringify(objectInfo)}`;
  };

  return (
    <form className="row g-3 form-container container-fluid">
      <h1 className="text-center mt-5 mb-5">User Registration</h1>
      <div className="div-flex">
        <div className="div-label-input w-100">
          <label className="form-label w-100 " htmlFor="name">
            Name
            <input
              type="text"
              className={nameCharacters ? 'is-valid form-control' : 'is-invalid form-control'}
              placeholder="Full name"
              name="name"
              id="name"
              value={name}
              onChange={({ target }) => (setName(target.value.toUpperCase()))}
              onKeyUp={validForm}
              required
              autoComplete="no"
            />
          </label>
        </div>
        <div className="div-label-input w-100">
          <label className="form-label w-100" htmlFor="birth-date">
            Birth date
            <input
              type="text"
              className={isValidBirthDate ? 'is-valid form-control' : 'is-invalid form-control'}
              placeholder="dd/mm/aaaa"
              name="birth-date"
              id="birth-date"
              value={birthDate}
              onChange={({ target }) => setBirthDate(target.value)}
              onKeyUp={validForm}
              required
            />
          </label>
        </div>
        <div className="div-label-input w-100">
          <label className="form-label w-100" htmlFor="cpf">
            CPF
            <input
              type="password"
              className={isValidCPF ? 'is-valid form-control' : 'is-invalid form-control'}
              placeholder="000.000.000-00"
              name="cpf"
              id="cpf"
              value={CPF}
              onChange={({ target }) => setCPF(target.value)}
              onKeyUp={validForm}
              required
            />
          </label>
        </div>
        <div className="div-label-input w-100">
          <label className="form-label w-100" htmlFor="cep">
            Zip code
            <input
              type="text"
              className={isValidZipCode ? 'is-valid form-control' : 'is-invalid form-control'}
              placeholder="00000-000"
              name="cep"
              id="cep"
              value={zipCode}
              onChange={({ target }) => setZipeCode(target.value)}
              onBlur={() => fillInAdressData()}
              required
              autoComplete="no"
            />
          </label>
        </div>
        <div className="div-label-input w-100">
          <label className="form-label w-100" htmlFor="road">
            Road
            <input
              type="text"
              className="form-control"
              name="road"
              id="road"
              value={road}
              onChange={({ target }) => setRoad(target.value)}
              onKeyUp={validForm}
              required
            />
          </label>
        </div>
        <div className="div-label-input w-100">
          <label className="form-label w-100" htmlFor="neighborhood">
            Neighborhood
            <input
              type="text"
              className="form-control"
              name="neighborhood"
              id="neighborhood"
              value={neighborhood}
              onChange={({ target }) => setNeighborhood(target.value)}
              onKeyUp={validForm}
              required
            />
          </label>
        </div>
        <div className="div-label-input w-100">
          <label className="form-label w-100" htmlFor="city">
            City
            <input
              type="text"
              className="form-control"
              name="city"
              id="city"
              value={city}
              onChange={({ target }) => setCity(target.value)}
              onKeyUp={validForm}
              required
            />
          </label>
        </div>
        <div className="div-label-input w-100">
          <label className="form-label uf w-100" htmlFor="UF">
            UF
            <input
              type="text"
              className="form-control"
              name="UF"
              id="UF"
              value={UF}
              onChange={({ target }) => setUF(target.value)}
              onKeyUp={validForm}
              required
            />
          </label>
        </div>
        <div className="div-btn w-100">
          <button
            type="submit"
            className="btn btn-success mt-4 mb-4 w-100"
            disabled={disabled}
            onClick={sendUserInformations}
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </form>
  );
}
