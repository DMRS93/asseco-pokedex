'use strict';

const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150';

const pokeCont = document.querySelector('.container');

const renderPoke = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      
      <div class="country__data">
        <h3 class="country__name">${data.results}</h3>
    `;
  pokeCont.insertAdjacentHTML('beforeend', html);
};

const Show150 = async function () {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');

  const data = await res.json();
  if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  console.log(res);
  console.log(data);
  renderPoke(data);
};
Show150();
