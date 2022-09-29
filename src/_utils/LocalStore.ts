import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToLocalStore = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
};

export const getFromLocalStore = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data || '');
  } catch (e) {
    return false;
  }
};

export const removeFromLocalStore = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    true;
  } catch (e) {
    return false;
  }
};
