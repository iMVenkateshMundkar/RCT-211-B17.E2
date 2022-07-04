import axios from "axios";
import * as actionTypes from "./actionTypes";

// const getShoes = () => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.GET_SHOES_DATA_REQUEST });
//     const { data } = await axios.get("/shoes");

//     dispatch({
//       type: actionTypes.GET_SHOES_DATA_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_SHOES_DATA_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export { getShoes };

const getShoesDataRequest = () => {
  return { type: actionTypes.GET_SHOES_DATA_REQUEST };
};

const getShoesDataSuccess = (payload) => {
  return { type: actionTypes.GET_SHOES_DATA_SUCCESS, payload };
};

const getShoesDataFailure = () => {
  return { type: actionTypes.GET_SHOES_DATA_FAILURE };
};

export { getShoesDataFailure, getShoesDataRequest, getShoesDataSuccess };
//Create ActionCreator functions here
