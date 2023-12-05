import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { StarWarsType } from '../../types/starWarsTypes';
import { Table } from '../../components/Table/Table';
import { headerStarWarsRowConfig } from './starWarsTableConfig';
import { StarWarsCards } from '../../components/Cards/StarWarsCards/StarWarsCards';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import styles from '../RickAndMorty/RickAndMorty.module.scss';
import Dropdown from '../../components/Dropdown/Dropdown';

export const TheStarWars = () => {
  const [starWarsData, setStarWarsData] = useState<StarWarsType[]>([]);

  const { view, setView } = useContext(ViewContext);

  const viewsOptions = views.map(({ key, title }) => ({
    id: key,
    label: title
  }));

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

  return (
    <div>
      <div className={styles.dropdownContainer}>
        <Dropdown selectedOptionId={view} options={viewsOptions} onSelect={setView} />
      </div>

      {view === PageViews.card && <StarWarsCards title="The Star Wars" data={starWarsData} />}
      {view === PageViews.table && <Table title="Star Wars" data={starWarsData} tableConfig={headerStarWarsRowConfig} />}
    </div>
  );
};
