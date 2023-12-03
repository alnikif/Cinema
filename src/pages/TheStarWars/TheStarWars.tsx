import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { StarWarsType } from '../../types/starWarsTypes';
import { Table } from '../../components/Table/Table';
import { headerStarWarsRowConfig } from './starWarsTableConfig';
import { StarWarsCards } from '../../components/Cards/StarWarsCards/StarWarsCards';
import { ViewContext } from '../../Providers/ViewProvider';

export const TheStarWars = () => {
  const [ starWarsData, setStarWarsData] = useState<StarWarsType[]>([]);

  const { view } = useContext(ViewContext);

  useEffect(() => {
  axios
    .get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json')
    .then((response) => {
      const listCharacters = response?.data || [];
      console.log(listCharacters)
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

  return (
    <div>
      {view === 'card' ?
        <StarWarsCards title='The Star Wars' data={starWarsData} /> :
        <Table title="Star Wars" data={starWarsData} tableConfig={headerStarWarsRowConfig} />
      }
    </div>
  )
};
