import DropdownComponent from "../DropdownComponent";
import React, {useContext} from "react";
import {PaginationContext, paginations} from "../../../../Providers/PaginationProvider";

const PaginationDropdown = () => {
    const { pagination, setPagination } = useContext(PaginationContext);

    const paginationOptions = paginations.map(({ key, title }) => ({
        id: key,
        label: title
    }));

    return (
        <DropdownComponent selectedOptionId={pagination} options={paginationOptions} onSelect={setPagination} />
    )
};

export default PaginationDropdown;