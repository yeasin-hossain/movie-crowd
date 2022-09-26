import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface userProfile {
  blood_group: string | null;
  district: string | null;
  division: string | null;
  dob: string | null;
  email: string | null;
  gender: string | null;
  image_url: string | null;
  marital_status: string | null;
  name: string | null;
  nationality: string | null;
  nid: string | null;
  uuid: string;
}
const initialState: userProfile = {
  blood_group: null,
  district: null,
  division: null,
  dob: null,
  email: null,
  gender: null,
  image_url: null,
  marital_status: null,
  name: null,
  nationality: null,
  nid: null,
  uuid: '',
};

const UserSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserProfileInfo(state: userProfile, action: PayloadAction<userProfile>) {
      const {payload} = action;
      console.log('payload', payload);
      return {...payload};
    },
  },
});
export const {setUserProfileInfo} = UserSlice.actions;
export default UserSlice.reducer;
