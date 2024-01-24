import React, { useContext, useEffect, useState } from 'react';

import { StarWarsType } from '../../types/starWarsTypes';
import { TableComponent } from '../../components/Table/TableComponent';
import { headerStarWarsRowConfig } from './starWarsTableConfig';
import { StarWarsCards } from '../../components/Cards/StarWarsCards/StarWarsCards';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import DropdownComponent from '../../components/Dropdown/DropdownComponent';
import {getStarWarsList} from "../../api/theStarWars";
import {Spin} from "antd";
import styles from './TheStarWars.module.scss';

export const TheStarWars = () => {
  const [starWarsData, setStarWarsData] = useState<StarWarsType[]>([]);
  const { view, setView } = useContext(ViewContext);
  const [loading, setLoading] = useState(false);


  const viewsOptions = views.map(({ key, title }) => ({
    id: key,
    label: title
  }));

  useEffect(() => {
    setLoading(true);
    getStarWarsList('all')
      .then((response) => {
        setStarWarsData(response);
      })
      .catch((apiError: unknown) => {
        if (apiError instanceof Error) {
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className={styles.dropdownViewWrapper}>
        <DropdownComponent selectedOptionId={view} options={viewsOptions} onSelect={setView} />
      </div>
      {view === PageViews.card && <StarWarsCards title="The Star Wars" data={starWarsData} />}
      {view === PageViews.table && <TableComponent title="Star Wars" data={starWarsData} tableConfig={headerStarWarsRowConfig} />}
      {loading && <Spin/>}
    </div>
  );
};
