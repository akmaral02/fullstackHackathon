import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API_CATEGORIES, API_Comments, API_TOUR } from "../helpers/consts";
import { getToken } from "../helpers/function";

export const toursContext = createContext();
export const useTour = () => useTour();

let initState = [
  {
    tours: [],
    oneTour: {},
    categories: [],
    // page:0
  },
];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getTours":
      return { ...state, tours: action.payload };
    //tours:  action.payload.result
    case "getOneTour":
      return { ...state, oneTour: action.payload };
    case "getCategories":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

const ToursContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();

  //! FUNC-ON FOR GETTINF TOURS DATA FROM API
  const getTours = async () => {
    try {
      let config = getToken();

      let res = await axios.get(`${API_TOUR}`, config); //${window.location.search}
      dispatch({
        type: "getTours",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //? EMD FUNC-ON FOR GETTINF TOURS DATA FROM API

  //! FUNC-ON FOR GET CATEGORIES FROM API
  const getCategories = async () => {
    try {
      let config = getToken();

      let res = await axios.get(`${API_CATEGORIES}list/`, config);

      dispatch({
        type: "getCategories",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC-ON FOR GET CATEGORIES FROM API

  //! FUNC-ON FOR ADD NEW TOUR TO API
  const addTours = async (newTour) => {
    try {
      let config = getToken();

      let res = await axios.post(`${API_TOUR}`, newTour, config);
      console.log(res.data);
      navigate("/tours");
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC-ON FOR ADD NEW TOUR TO API

  //! FUNC-ON FOR GETTING SINGLE TOUR FROM API
  const getOneTour = async (id) => {
    try {
      let config = getToken();

      let res = await axios.get(`${API_TOUR}${id}/`, config);
      dispatch({
        type: "getOneTour",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC-ON FOR GETTING SINGLE TOUR FROM API

  //! FUNC-ON FOR EDIT ONE TOUR AND PATCH TO API
  const editTour = async (id, editedTour) => {
    try {
      let config = getToken();

      let res = await axios.patch(`${API_TOUR}${id}/`, editedTour, config);
      getTours();
      navigate("/tours");
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC-ON FOR EDIT ONE TOUR AND PATCH TO API

  //! FUNC-ON FOR DELTE TOUR FROM API
  const deleteTour = async (id) => {
    try {
      let config = getToken();

      let res = await axios.delete(`${API_TOUR}${id}/`, config);
      getTours();
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC-ON FOR DELTE TOUR FROM API

  //! FUNC-ON FOR LIKES

  const like = async (id) => {
    try {
      let config = getToken();
      let res = await axios.get(`${API_TOUR}${id}/like/`, config);
      getTours();
    } catch (error) {
      // Comments?.title?.map()
      console.log(error);
    }
  };

  //? END FUNC-ON FOR LIKES

  //! FUNC-ON FOR COMMENTS

  const comments = async (commnet, id) => {
    try {
      let config = getToken();
      let res = await axios.post(`${API_Comments}`, commnet, config);
      getOneTour(id);
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC-ON FOR COMMENTS

  let value = {
    tours: state.tours,
    oneTour: state.oneTour,
    categories: state.categories,

    getTours,
    getCategories,
    getOneTour,
    addTours,
    editTour,
    deleteTour,
    like,
    comments,
  };
  return (
    <toursContext.Provider value={value}>{children}</toursContext.Provider>
  );
};

export default ToursContextProvider;
