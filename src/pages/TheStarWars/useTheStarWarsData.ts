import React, {useEffect, useState} from 'react';
import {StarWarsType} from "../../types/starWarsTypes";
import {getStarWarsList} from "../../api/theStarWars";

const UseTheStarWarsData = () => {
    const [starWarsData, setStarWarsData] = useState<StarWarsType[]>([]);
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
    return {
        starWarsData,
        setStarWarsData,
        loading,
        setLoading,
    }
};

export default UseTheStarWarsData;