import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Text,
} from 'react-native';
import React, {useEffect} from 'react';
import BottomSheet from '../../view/BottomSheet';
import {colors} from '../../../_utils/Theme';
import {TouchableOpacity} from 'react-native';
import {DetailsText} from '../../text';
const {height, width} = Dimensions.get('window');

let emptyComponent: null | React.ReactNode = null;
export interface optionProps {
  label: string;
  value: string | number;
  id?: string | number;
  key?: string | number;
  iconName?: string;
}
interface OptionsProps {
  visibility: boolean;
  onClose: () => void;
  data: optionProps[];
  value: string | number;
  onChange: (value: string | number) => void;
}
const Options = ({
  visibility,
  onClose,
  data,
  value,
  onChange,
}: OptionsProps) => {
  useEffect(() => {
    if (data.length === 0 && !emptyComponent) {
      emptyComponent = require('../../svg/EmptyList');
    }
  }, [data]);
  return (
    <Modal transparent visible={visibility}>
      <View style={styles.body}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={{flex: 1, width}} />
        </TouchableWithoutFeedback>
        <BottomSheet isActive={visibility} pick={300}>
          <FlatList
            data={data}
            keyExtractor={item =>
              (item?.id || item?.key || item?.value).toString()
            }
            ListEmptyComponent={
              <View style={styles.emptyBody}>
                <DetailsText text={'No data found'} />
              </View>
            }
            style={{maxHeight: 300}}
            renderItem={({item}) => {
              console.log(value);
              const isSelected = item.value === value ? true : false;
              return (
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => onChange(item.value)}>
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </BottomSheet>
      </View>
    </Modal>
  );
};

export default Options;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    backgroundColor: '#17171722',
  },
  itemContainer: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.blueGray(200),
    marginVertical: 8,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 17,
    paddingHorizontal: 8,
    flex: 1,
  },
  emptyBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
