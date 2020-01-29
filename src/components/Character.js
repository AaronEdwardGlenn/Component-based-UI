import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylesBanana from './Character.css';

export default class Character extends Component{
    static propTypes = {
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
      lastLocation: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }
    render() {
      const { name, status, species, gender, origin, lastLocation, image } = this.props.data;

      
      return (
        <>
          <section className={stylesBanana.container}>
            <div className={stylesBanana.information}>
              <p>
                <img src={image}></img>
              </p>
              <p>Name: {name}</p>
              <p>Status: {status}</p>
              <p>Species: {species}</p>
              <p>Gender: {gender}</p>
              <p>Origin: {origin}</p>
              <p>Last Location: {lastLocation}</p>
            </div>
          </section>
        </>
      );
    }
}


