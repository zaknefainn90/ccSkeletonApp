import axios from 'axios';
import { Game } from '../types';

export async function getGamesList(): Promise<Game> {
  const response = await axios.get('/games');

  return response.data;
}
