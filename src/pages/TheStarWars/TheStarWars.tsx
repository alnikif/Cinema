import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { StarWarsType } from '../../types/starWarsTypes';
import { Table } from '../../components/Table/Table';
import { headerStarWarsRowConfig } from './starWarsTableConfig';



export const TheStarWars = () => {
  const [ starWarsData, setStarWarsData] = useState<StarWarsType[]>([]);

  useEffect(() => {
  axios
    .get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json')
    .then((response) => {
      const listCharacters = response?.data || [];
      setStarWarsData(listCharacters);
    })
    .catch((apiError: unknown) => {
      if (apiError instanceof Error) {

      }
    })
    .finally(() => {
      //
    });
}, []);

  console.log(starWarsData)


  return (
    <div>
      <Table title="Star Wars" data={starWarsData} tableConfig={headerStarWarsRowConfig} />
    </div>
  )
};
