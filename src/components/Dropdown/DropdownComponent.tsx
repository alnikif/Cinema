import React, { useState, useMemo } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

type OptionItemType<T> = {
    id: T;
    label: string;
};

type DropdownPropsTypes<T> = {
    readonly options: OptionItemType<T>[];
    readonly selectedOptionId?: string | null | undefined;
    readonly onSelect: (optionId: T) => void;
};

const DropdownComponent = <T extends unknown>(props: DropdownPropsTypes<T>) => {
    const { selectedOptionId, options, onSelect } = props;

    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = useMemo(() => {
        if (!selectedOptionId) return null;
        return options.find((item) => item.id == selectedOptionId) || null;
    }, [options, selectedOptionId]);

    const onToggleDropdown = () => setIsOpen(!isOpen);

    const onSelectOption = ({ key }: { key: string }) => {
        const selectedItemId = key;
        onSelect(selectedItemId as T);
        setIsOpen(false);
    };

    const items: MenuProps['items'] = options.map((item) => ({
        key: String(item.id),
        label: item.label,
    }));

    return (
        <Dropdown
            menu={{
                items,
                selectable: true,
                selectedKeys: selectedOptionId ? [String(selectedOptionId)] : [],
                onSelect: onSelectOption,
            }}
        >
            <Typography.Link>
                <Space>
                    {selectedOption ? selectedOption.label : 'View'}
                    <DownOutlined />
                </Space>
            </Typography.Link>
        </Dropdown>
    );
};

export default DropdownComponent;
