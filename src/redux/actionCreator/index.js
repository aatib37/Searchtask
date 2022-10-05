import { GET_ADS_DATA_FAILURE, GET_ADS_DATA_SUCCESS, GET_COMPANY_DATA_FAILURE, GET_COMPANY_DATA_SUCCESS } from "../actions";
const BASE_URL = window.location.href

export const fetchCompanySuccess = (data)=>{
    return {type:GET_COMPANY_DATA_SUCCESS,payload:data}
}
export const fetchCompanyFailure = (data)=>{
    return {type:GET_COMPANY_DATA_FAILURE,payload:data}
}
export const fetchCompanyData = () => {
    return (dispatch) => {
      fetch(BASE_URL+"data/company.json")
        .then((res) => res.json())
        .then((data) => {
            const temp = {};
            data.map((value)=>{
                temp[value._id] = value;
            })
          dispatch(fetchCompanySuccess(temp));
        })
        .catch((err) => {
          dispatch(fetchCompanyFailure  (err.message));
        });
    };
  };

  export const fetchAdsSuccess = (data)=>{
    return {type:GET_ADS_DATA_SUCCESS,payload:data}
}
export const fetchAdsFailure = (data)=>{
    return {type:GET_ADS_DATA_FAILURE,payload:data}
}
export const fetchAdsData = () => {
    return (dispatch) => {
      fetch(BASE_URL+"data/ads.json")
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchAdsSuccess(data));
        })
        .catch((err) => {
          dispatch(fetchAdsFailure(err.message));
        });
    };
  };