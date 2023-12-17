import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { HarryPotterType } from '../../types/harryPotterTypes';
import { HarryPotterCards } from '../../components/Cards/HarryPotterCards/HarryPotterCards';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import Dropdown from '../../components/Dropdown/Dropdown';
import { harryPotterTableConfig } from './harryPotterTableConfig';
import { Table } from '../../components/Table/Table';
import styles from './HarryPotter.module.scss';

export const HarryPotter = () => {
  const [harryPotterData, setHarryPotterData] = useState<HarryPotterType[] | []>([]);

  const { view, setView } = useContext(ViewContext);

  const viewsOptions = views.map(({ key, title }) => ({
    id: key,
    label: title
  }));

  useEffect(() => {
    axios.get('https://hp-api.onrender.com/api/characters').then((response) => {
      setHarryPotterData(response.data);
      console.log(harryPotterData);
    });
  }, []);

  return (
    <>
      <div className={styles.dropdownViewWrapper}>
        <Dropdown selectedOptionId={view} options={viewsOptions} onSelect={setView} />
      </div>
      {view === PageViews.table && <Table title="Harry Potter" data={harryPotterData} tableConfig={harryPotterTableConfig} />}
      {view === PageViews.card && <HarryPotterCards data={harryPotterData} title="Harry Potter" />}
    </>
  );
};
