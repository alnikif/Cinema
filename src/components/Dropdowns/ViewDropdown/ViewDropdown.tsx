import React, {useContext} from 'react';
import DropdownComponent from "../Dropdown/DropdownComponent";
import {ViewContext, views} from "../../../Providers/ViewProvider";

const ViewDropdown = () => {
    const { view, setView } = useContext(ViewContext);

    const viewsOptions = views.map(({ key, title }) => ({
        id: key,
        label: title
    }));
    return (
        <DropdownComponent selectedOptionId={view} options={viewsOptions} onSelect={setView} />

    );
};

export default ViewDropdown;