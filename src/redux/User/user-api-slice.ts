import {ResponseParams} from '..';
import {UserDataProps} from '../../components/view/editProfile/validation';
import {apiSlice} from '../Api';
interface DistrictParams {
  divisionName: string;
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBesicProfile: builder.mutation<ResponseParams, void>({
      query: () => ({
        url: 'my-basic-profile/?role=PATIENT',
        method: 'GET',
      }),
    }),
    getDetailsProfile: builder.mutation<ResponseParams, {uuid: string}>({
      query: ({uuid}) => ({
        url: `/patients/${uuid}/`,
        method: 'GET',
      }),
    }),
    getDivisionList: builder.query<ResponseParams, void>({
      query: () => '/divisions/',
    }),
    getDistrictList: builder.query<ResponseParams, DistrictParams>({
      query: ({divisionName}) => `/districts/?division__name=${divisionName}`,
    }),
    createPatientProfile: builder.mutation<any, UserDataProps>({
      query: body => ({
        url: '/create/patients/',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useGetBesicProfileMutation,
  useGetDetailsProfileMutation,
  useGetDivisionListQuery,
  useGetDistrictListQuery,
  useCreatePatientProfileMutation,
} = userApiSlice;
