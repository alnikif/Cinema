import React, { useContext, useEffect, useState } from 'react';
import {Spin, Table, Tag} from 'antd';
import { HarryPotterType } from '../../types/harryPotterTypes';
import { HarryPotterCards } from '../../components/Cards/HarryPotterCards/HarryPotterCards';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import DropdownComponent from '../../components/Dropdowns/Dropdown/DropdownComponent';
import { harryPotterTableConfig } from './harryPotterTableConfig';
import { TableComponent } from '../../components/Table/TableComponent';
import styles from './HarryPotter.module.scss';
import {NotificationError} from "../../components/NotificationError/NotificationError";
import {getHarryPotterList} from "../../api/harryPotter";
import {ColumnsType} from "antd/lib/table/interface";
import {Link} from "react-router-dom";

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


  ////////////
  interface DataType {
    id: string;
    name: string;
    gender: string;
    image: string;
    species: string;
    house: string;
    key: string;
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => record ? <Link to={`${record.id}`}>{text}</Link> : null,
    },
    {
      title: 'Species',
      dataIndex: 'species',
      key: 'species',
    },
    {
      title: 'House',
      dataIndex: 'house',
      key: 'house',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image)  => <img style={{height: 100}} src={image} />
    },
    {
      title: 'Gender',
      key: 'gender',
      dataIndex: 'gender',
      render: (_, item) => {
        const color = item.gender == 'male' ? 'geekblue' : 'volcano';

        return (
            <Tag color={color}
            >
              {String(item.gender).toUpperCase()}
            </Tag>
        )
      }
    },
  ];



  return (
    <>
      <div className={styles.dropdownViewWrapper}>
        <DropdownComponent selectedOptionId={view} options={viewsOptions} onSelect={setView} />
      </div>
      {view === PageViews.card && <HarryPotterCards data={harryPotterData} title="Harry Potter" />}
      {view === PageViews.table && <Table dataSource={harryPotterData} columns={columns} />}

      <NotificationError title="Fetch Harry Potter error notification" message={error?.message} />
      {loading && <div><Spin/></div>}

    </>
);
};
