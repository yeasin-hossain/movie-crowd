import React, {useEffect} from 'react';
import {
  getRecentVisitInitialData,
  getWatchListLocalInitialData,
  setDataFromLocalStore,
  setDataFromLocalStoreRecentVisit,
  useAppDispatch,
} from '../../redux';
import {GenreList, MoviesByGenre, RecentlyVisit} from '../../feature';
import {HomeDashboardProps} from '../../_config/navigationTypes';

const HomeDashboard = ({}: HomeDashboardProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const watchList = await getWatchListLocalInitialData();
      const recentVisit = await getRecentVisitInitialData();

      watchList && dispatch(setDataFromLocalStore(watchList));
      recentVisit && dispatch(setDataFromLocalStoreRecentVisit(recentVisit));
    })();
  }, [dispatch]);

  return (
    <>
      <GenreList />
      <MoviesByGenre />
      <RecentlyVisit />
    </>
  );
};

export default HomeDashboard;
