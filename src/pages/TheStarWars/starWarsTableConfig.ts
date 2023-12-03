import { CellType } from '../../components/Table/CellType';
import { StarWarsType } from '../../types/starWarsTypes'

export const headerStarWarsRowConfig = [
  {
    id: 'link',
    dataKey: 'id',
    label: 'View character',
    cellType: CellType.link,
    width: 3,
    getCellValue: (itemData: StarWarsType) => `/rick-and-morty/${itemData.id}`
  },
  { id: 'name', dataKey: 'name', label: 'Character name', cellType: CellType.name, width: 2 },
  { id: 'gender', dataKey: 'gender', label: 'Gender', cellType: CellType.gender, width: 1 },
  { id: 'image', dataKey: 'image', label: 'Image', cellType: CellType.image, width: 1 },
  { id: 'species', dataKey: 'species', label: 'Species', cellType: CellType.species, width: 2 },
  { id: 'location', dataKey: 'location', label: 'Location', cellType: CellType.location, width: 2 },
  { id: 'status', dataKey: 'status', label: 'Status', cellType: CellType.status, width: 2 },
  { id: 'type', dataKey: 'type', label: 'Type', cellType: CellType.type, width: 1 },
  { id: 'affiliations', dataKey: 'affiliations', label: 'Affiliations', cellType: CellType.affiliations, width: 4 },
  { id: 'apprentices', dataKey: 'apprentices', label: 'Apprentices', cellType: CellType.apprentices, width: 2 },
  { id: 'cybernetics', dataKey: 'cybernetics', label: 'Cybernetics', cellType: CellType.cybernetics, width: 2 },
  { id: 'died', dataKey: 'died', label: 'Died', cellType: CellType.died, width: 2 },
  { id: 'homeworld', dataKey: 'homeworld', label: 'Homeworld', cellType: CellType.homeworld, width: 1 },
  { id: 'masters', dataKey: 'masters', label: 'Masters', cellType: CellType.masters, width: 2 },
  { id: 'wiki', dataKey: 'wiki', label: 'Wiki', cellType: CellType.wiki, width: 1 }
];







