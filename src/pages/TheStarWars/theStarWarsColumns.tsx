import {ColumnsType} from "antd/lib/table/interface";
import {Link} from "react-router-dom";
import {Tag} from "antd";
import React from "react";

interface DataType {
    id: number;
    name: string;
    gender: string;
    image: string;
    species: string;
    homeworld: string;
    key: string;
}

export const theStarWarsColumns: ColumnsType<DataType> = [
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