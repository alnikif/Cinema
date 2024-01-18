import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { StarWarsType } from '../../types/starWarsTypes';
import { Table } from '../../components/Table/Table';
import { headerStarWarsRowConfig } from './starWarsTableConfig';
import { StarWarsCards } from '../../components/Cards/StarWarsCards/StarWarsCards';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import Dropdown from '../../components/Dropdown/Dropdown';
import styles from './TheStarWars.module.scss';
import {getStarWarsList} from "../../api/theStarWars";

export const TheStarWars = () => {
  const [starWarsData, setStarWarsData] = useState<StarWarsType[]>([]);
  const { view, setView } = useContext(ViewContext);

  const viewsOptions = views.map(({ key, title }) => ({
    id: key,
    label: title
  }));

  useEffect(() => {
    axios
    getStarWarsList('all')
      .then((response) => {
        setStarWarsData(response);
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
      <div className={styles.dropdownViewWrapper}>
        <Dropdown selectedOptionId={view} options={viewsOptions} onSelect={setView} />
      </div>
      {view === PageViews.card && <StarWarsCards title="The Star Wars" data={starWarsData} />}
      {view === PageViews.table && <Table title="Star Wars" data={starWarsData} tableConfig={headerStarWarsRowConfig} />}
    </div>
  );
};
