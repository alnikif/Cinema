import React, { useContext } from 'react';
import { StarWarsCards } from '../../components/Cards/StarWarsCards/StarWarsCards';
import { PageViews, ViewContext } from '../../Providers/ViewProvider';
import { Spin, Table } from "antd";
import ViewDropdown from "../../components/Dropdowns/ViewDropdown/ViewDropdown";
import {theStarWarsColumns} from "./theStarWarsColumns";

import styles from './TheStarWars.module.scss';
import useTheStarWarsData from "./useTheStarWarsData";

export const TheStarWars = () => {
  const { view } = useContext(ViewContext);

  const {
    starWarsData,
    loading,
  } = useTheStarWarsData();

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
