import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { RootState } from '@redux/reducer';
import { Game } from '@components/Games/types';
import { fetchGameListAction } from '@components/Games/store/actions';
import { getGamesList, getGamesProgressState } from '@components/Games/store/selector';
import { ProgressState } from '@dataTypes/index';

interface Props {

}

const StyledGames = styled.div`
  padding: 4em;
`;

export const Games: FC<Props> = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const gamesList = useSelector((state: RootState) => getGamesList(state));
  const progressState = useSelector((state: RootState) => getGamesProgressState(state));

  useEffect(() => {
    dispatch(fetchGameListAction());
  }, []);

  const renderGameList = () => gamesList.map((item: Game) => <li key={item.id}>{item.title}</li>);

  const changeLang = () => i18n.changeLanguage('pl');

  return (
    <StyledGames>
      <h4>Games List</h4>
      <button onClick={changeLang} type="button">PL</button>
      <p>{t('welcome')}</p>
      { progressState === ProgressState.RESOLVED && renderGameList()}
      { progressState === (ProgressState.PENDING || ProgressState.IDLE) && <div data-testid="loader">Loading ...</div>}
    </StyledGames>
  );
};
