import React, { Component, useEffect, useReducer } from 'react';
import PropTypes from 'react';
import styled from 'styled-components';

//todo: pull out state and use effect
//todo: this page needs to be able to toggle saved pokemon, so it needs a dispatch

//todo: create a reducer

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      throw new Error('Need type');
  }
};
const Detailed = ({ location }) => {
  const { url: API_DETAILED } = location.state; //provided by roouter
  //componentDidMount, query the url in the history
  useEffect(() => {
    async function fetchDetailed() {
      try {
        const res = await fetch(API_DETAILED);
        const data = await res.json();

        //ex: https://pokeapi.co/api/v2/pokemon/3/
        //note:
      } catch (err) {
        console.warn('Error fetching detailed Pokemon request');
      }
    }
  }, [API_DETAILED]);

  return <div>DETAILED VIEW!</div>;
};

export default Detailed;
