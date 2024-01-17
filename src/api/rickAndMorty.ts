import { getAxiosGlobalConfig } from './axios';
import { RickAndMortyResponseType, RickAndMortyType } from '../types/rickAndMortyTypes';

const axiosInstance = getAxiosGlobalConfig('https://rickandmortyapi.com/api/');

export const getRickAndMortyList = async (page: string): Promise<RickAndMortyResponseType> => axiosInstance.get(`character/?page=${page}`);

export const getRickAndMortyCharacter = async (id: string): Promise<RickAndMortyType> => axiosInstance.get(`character/${id}`);