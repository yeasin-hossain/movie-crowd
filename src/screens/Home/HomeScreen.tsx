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
import {ScrollView} from 'react-native';

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
    <ScrollView>
      <GenreList />
      <MoviesByGenre />
      <RecentlyVisit />
    </ScrollView>
  );
};

export default HomeDashboard;
