import {ColumnsType} from "antd/lib/table/interface";
import {Link} from "react-router-dom";
import {Tag} from "antd";
import React from "react";

interface DataType {
    id: string;
    name: string;
    gender: string;
    image: string;
    species: string;
    house: string;
    key: string;
}
export const harryPotterColumns: ColumnsType<DataType> = [
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