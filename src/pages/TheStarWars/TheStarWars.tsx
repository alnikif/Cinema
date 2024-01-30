import React, { useContext, useEffect, useState } from 'react';

import { StarWarsType } from '../../types/starWarsTypes';
import { TableComponent } from '../../components/Table/TableComponent';
import { headerStarWarsRowConfig } from './starWarsTableConfig';
import { StarWarsCards } from '../../components/Cards/StarWarsCards/StarWarsCards';
import { PageViews, ViewContext, views } from '../../Providers/ViewProvider';
import DropdownComponent from '../../components/Dropdowns/Dropdown/DropdownComponent';
import {getStarWarsList} from "../../api/theStarWars";
import {Spin, Table, Tag} from "antd";
import styles from './TheStarWars.module.scss';
import {ColumnsType} from "antd/lib/table/interface";
import {Link} from "react-router-dom";

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


  ///////////
  interface DataType {
    id: number;
    name: string;
    gender: string;
    image: string;
    species: string;
    homeworld: string;
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
    {
      title: 'Home world',
      key: 'homeworld',
      dataIndex: 'homeworld'
    },
    {
      title: 'Link to wiki',
      dataIndex: 'wiki',
      key: 'wiki',
      render: (wiki: string ) => <a href={wiki}>Run to wiki</a>
    },
  ];


  return (
    <div>
      <div className={styles.dropdownViewWrapper}>
        <DropdownComponent selectedOptionId={view} options={viewsOptions} onSelect={setView} />
      </div>
      {view === PageViews.card && <StarWarsCards title="The Star Wars" data={starWarsData} />}
      {view === PageViews.table && <Table dataSource={starWarsData} columns={columns} />}

      {loading && <Spin/>}
    </div>
  );
};
