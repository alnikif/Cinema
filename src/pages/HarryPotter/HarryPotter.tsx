import React from 'react';
import {Spin, Table} from 'antd';
import { HarryPotterCards } from '../../components/Cards/HarryPotterCards/HarryPotterCards';
import { PageViews } from '../../Providers/ViewProvider';
import {NotificationError} from "../../components/NotificationError/NotificationError";
import {harryPotterColumns} from "./harryPotterColumns";
import ViewDropdown from "../../components/Dropdowns/ViewDropdown/ViewDropdown";
import useHarryPotterData from "./useHarryPotterData";

import styles from './HarryPotter.module.scss';

export const HarryPotter = () => {
 const {
   harryPotterData,
   error,
   loading,
   view,
 } = useHarryPotterData();

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
