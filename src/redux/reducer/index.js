import { GET_ADS_DATA_FAILURE, GET_ADS_DATA_SUCCESS, GET_COMPANY_DATA_FAILURE, GET_COMPANY_DATA_SUCCESS } from "../actions";

const initialState = {
  companyInfo: {},
  metaAdsData: [],
  errorMsg:"",
  errorCompany:""
};

export const reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_COMPANY_DATA_SUCCESS:
        return { ...state, companyInfo: action.payload,errorMsg:"" };
    case GET_COMPANY_DATA_FAILURE:
        return { ...state, companyInfo: [],errorMsg:action.payload };
    case GET_ADS_DATA_SUCCESS:
        return { ...state, metaAdsData: action.payload,errorCompany:"" };
    case GET_ADS_DATA_FAILURE:
        return { ...state, metaAdsData: [],errorCompany:action.payload };
    default:
      return { ...state };
  }
};