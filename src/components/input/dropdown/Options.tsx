import {StyleSheet, View, FlatList, Text} from 'react-native';
import React from 'react';
import BottomSheet from '../../view/BottomSheet';
import {colors} from '../../../_utils/Theme';
import {TouchableOpacity} from 'react-native';
import {DetailsText} from '../../text';

export interface optionProps {
  label: string;
  value: string | number;
  id?: string | number;
  key?: string | number;
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
  return (
    <BottomSheet isActive={visibility} pick={300} onClose={onClose}>
      <FlatList
        data={data}
        keyExtractor={item => (item?.id || item?.key || item?.value).toString()}
        ListEmptyComponent={
          <View style={styles.emptyBody}>
            <DetailsText text={'No data found'} />
          </View>
        }
        style={{maxHeight: 300}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                {
                  backgroundColor:
                    value === item.value
                      ? colors.primary
                      : colors.background_white,
                },
              ]}
              onPress={() => onChange(item.value)}>
              <Text
                style={[
                  styles.itemText,
                  {
                    color:
                      value === item.value
                        ? colors.background_white
                        : colors.blueGray(700),
                  },
                ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </BottomSheet>
  );
};

export default Options;

const styles = StyleSheet.create({
  itemContainer: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.blueGray(200),
    marginVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
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
