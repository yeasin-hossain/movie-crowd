import {Button, FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useAppSelector} from '../../redux';
import {TitleText} from '../../components/text';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {MovieItem, NotFound} from '../../components/view';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const WatchListScreen = () => {
  const {watchList} = useAppSelector(state => state.watchList);
  const [selectedDate, setDate] = useState(new Date());
  const [filterableDate, setFilterDate] = useState<Date | null>();
  const [datePickerOpen, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <DatePicker
        modal
        mode="date"
        open={datePickerOpen}
        date={selectedDate}
        onConfirm={date => {
          setOpen(false);
          setFilterDate(date);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View style={styles.buttonContainer}>
        <TitleText text="Your Favorites Movies..." styleProp={styles.title} />
        <View style={styles.buttonContainer}>
          <Button title="Filter" onPress={() => setOpen(true)} />
          <Button title="Clear" onPress={() => setFilterDate()} />
        </View>
      </View>
      <FlatList
        data={
          filterableDate
            ? watchList.filter(
                movie =>
                  movie?.watchListAddedDate ===
                  moment(filterableDate).format('YYYY-MM-DD'),
              )
            : watchList
        }
        renderItem={({item}) => <MovieItem movie={item} landscapeAble={true} />}
        columnWrapperStyle={styles.wrapStyle}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(kye, index) => `${kye.title}${index}`}
        numColumns={10000}
        ListEmptyComponent={<NotFound />}
      />
    </View>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    padding: HORIZONTAL_SPACE,
    color: colors.text.light,
  },
  wrapStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
