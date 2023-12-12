import { CellType } from '../../components/Table/CellType';
import { HarryPotterType } from '../../types/harryPotterTypes';

export const harryPotterTableConfig = [
  {
    id: 'Link',
    dataKey: 'link',
    label: 'View Character',
    cellType: CellType.link,
    getCellValue: (dataItem: HarryPotterType) => `/harry-potter/${dataItem.id}`,
    width: 2
  },
  { id: 'name', dataKey: 'name', label: 'Name', cellType: CellType.name, width: 2 },
  { id: 'image', dataKey: 'image', label: 'Image', cellType: CellType.image, width: 2 },
  { id: 'wizard', dataKey: 'wizard', label: 'Type', cellType: CellType.wizard, width: 2 },
  { id: 'house', dataKey: 'house', label: 'House', cellType: CellType.house, width: 2 },
  { id: 'alive', dataKey: 'alive', label: 'Status', cellType: CellType.alive, width: 2 },
  { id: 'ancestry', dataKey: 'ancestry', label: 'Ancestry', cellType: CellType.ancestry, width: 2 }
];
