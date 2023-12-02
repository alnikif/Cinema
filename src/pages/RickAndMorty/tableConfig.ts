import { CellType } from '../../components/Table/CellType';
import { RickAndMortyType } from '../../types/rickAndMortyTypes';

export const headerRickAndMortyRowConfig = [
  {
    id: 'link',
    dataKey: 'id',
    label: 'View character',
    cellType: CellType.link,
    width: 3,
    getCellValue: (itemData: RickAndMortyType) => `/rick-and-morty/${itemData.id}`
  },
  { id: 'name', dataKey: 'name', label: 'Character name', cellType: CellType.name, width: 4 },
  { id: 'gender', dataKey: 'gender', label: 'Gender', cellType: CellType.gender, width: 2 },
  { id: 'image', dataKey: 'image', label: 'Image', cellType: CellType.image, width: 1 },
  { id: 'species', dataKey: 'species', label: 'Species', cellType: CellType.species, width: 2 },
  { id: 'location', dataKey: 'location', label: 'Location', cellType: CellType.location, width: 2 },
  { id: 'status', dataKey: 'status', label: 'Status', cellType: CellType.status, width: 2 },
  { id: 'type', dataKey: 'type', label: 'Type', cellType: CellType.type, width: 1 }
];
