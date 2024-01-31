import React, { useContext, useEffect, useState } from 'react';
import { StarWarsType } from '../../types/starWarsTypes';
import { StarWarsCards } from '../../components/Cards/StarWarsCards/StarWarsCards';
import { PageViews, ViewContext } from '../../Providers/ViewProvider';
import { getStarWarsList } from "../../api/theStarWars";
import { Spin, Table } from "antd";
import ViewDropdown from "../../components/Dropdowns/ViewDropdown/ViewDropdown";
import {theStarWarsColumns} from "./theStarWarsColumns";

import styles from './TheStarWars.module.scss';

export const TheStarWars = () => {
  const [starWarsData, setStarWarsData] = useState<StarWarsType[]>([]);
  const { view } = useContext(ViewContext);
  const [loading, setLoading] = useState(false);

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
        <ViewDropdown />
      </div>
      {view === PageViews.card && <StarWarsCards title="The Star Wars" data={starWarsData} />}
      {view === PageViews.table && <Table dataSource={starWarsData} columns={theStarWarsColumns} />}
      {loading && <Spin/>}
    </div>
  );
};
