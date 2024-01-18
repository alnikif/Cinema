import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { HarryPotterType } from '../../types/harryPotterTypes';
import { HarryPotterCards } from '../../components/Cards/HarryPotterCards/HarryPotterCards';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import Dropdown from '../../components/Dropdown/Dropdown';
import { harryPotterTableConfig } from './harryPotterTableConfig';
import { Table } from '../../components/Table/Table';
import styles from './HarryPotter.module.scss';
import {NotificationError} from "../../components/NotificationError/NotificationError";
import {getHarryPotterList} from "../../api/harryPotter";

export const HarryPotter = () => {
  const [harryPotterData, setHarryPotterData] = useState<HarryPotterType[] | []>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const { view, setView } = useContext(ViewContext);

  const viewsOptions = views.map(({ key, title }) => ({
    id: key,
    label: title
  }));

  useEffect(() => {
    getHarryPotterList().then((response) => {
      setHarryPotterData(response);
    })
    .catch((apiError: unknown) => {
      if (apiError instanceof Error) {
        setError(apiError);
      }
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className={styles.dropdownViewWrapper}>
        <Dropdown selectedOptionId={view} options={viewsOptions} onSelect={setView} />
      </div>
      {view === PageViews.table && <Table title="Harry Potter" data={harryPotterData} tableConfig={harryPotterTableConfig} />}
      {view === PageViews.card && <HarryPotterCards data={harryPotterData} title="Harry Potter" />}

      <NotificationError title="Fetch Harry Potter error notification" message={error?.message} />
      {loading && <div>Loading...</div>}

    </>
);
};
