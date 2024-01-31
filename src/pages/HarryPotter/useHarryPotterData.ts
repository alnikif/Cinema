import React, {useContext, useEffect, useState} from 'react';
import {HarryPotterType} from "../../types/harryPotterTypes";
import {ViewContext} from "../../Providers/ViewProvider";
import {getHarryPotterList} from "../../api/harryPotter";

const UseHarryPotterData = () => {
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
    return {
        harryPotterData,
        setHarryPotterData,
        error,
        setError,
        loading,
        setLoading,
        view,
    }
};

export default UseHarryPotterData;