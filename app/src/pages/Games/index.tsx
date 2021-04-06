import React, { FC } from 'react';
import { Games } from '@components/Games/Games';

interface Props {

}

const GamesPage: FC<Props> = () => (
  <div>
    <h2>Games</h2>
    <Games />
  </div>
);

export default GamesPage;
