import React, { useContext, useEffect, useState } from 'react';
import {Spin, Table} from 'antd';
import { HarryPotterType } from '../../types/harryPotterTypes';
import { HarryPotterCards } from '../../components/Cards/HarryPotterCards/HarryPotterCards';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import {NotificationError} from "../../components/NotificationError/NotificationError";
import {getHarryPotterList} from "../../api/harryPotter";
import {harryPotterColumns} from "./harryPotterColumns";
import ViewDropdown from "../../components/Dropdowns/ViewDropdown/ViewDropdown";

import styles from './HarryPotter.module.scss';

export const HarryPotter = () => {
  const [harryPotterData, setHarryPotterData] = useState<HarryPotterType[] | []>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const { view } = useContext(ViewContext);

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
        <ViewDropdown />
      </div>
      {view === PageViews.card && <HarryPotterCards data={harryPotterData} title="Harry Potter" />}
      {view === PageViews.table && <Table dataSource={harryPotterData} columns={harryPotterColumns} />}

      <NotificationError title="Fetch Harry Potter error notification" message={error?.message} />
      {loading && <div><Spin/></div>}

    </>
);
};
