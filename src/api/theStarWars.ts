import { getAxiosGlobalConfig } from './axios';
import {HarryPotterType} from "../types/harryPotterTypes";
import {StarWarsType} from "../types/starWarsTypes";

const axiosInstance = getAxiosGlobalConfig('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/');

export const getStarWarsList = async (params: string): Promise<StarWarsType[]> => axiosInstance.get(`${params}.json`);

export const getStarWarsCharacter = async (id: string): Promise<StarWarsType> => axiosInstance.get(`id/${id}.json`);