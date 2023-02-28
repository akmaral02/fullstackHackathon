import axios from "axios";
import { async } from "q";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  API_CATEGORIES,
  API_COMMENTS,
  API_Comments,
  API_HOTELS,
  API_TOUR,
} from "../helpers/consts";
import { getToken } from "../helpers/function";

const toursContext = createContext();
export const useTour = () => useContext(toursContext);

let initState = [
  {
    tours: [],
    oneTour: {},
    categories: [],
    page: 0,
    hotels: [],
    onehotel: {},
  },
];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getTours":
      return {
        ...state,
        tours: action.payload.results,
        page: Math.ceil(action.payload.count / 6),
      };
    //tours:  action.payload.result
    case "getOneTour":
      return { ...state, oneTour: action.payload };
    case "getCategories":
      return { ...state, categories: action.payload };
    case "getHotels":
      return { ...state, hotels: action.payload };
    case "getOneHotel":
      return { ...state, oneHotel: action.payload };
    default:
      return state;
  }
};

const ToursContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const location = useLocation();

  //! FUNC-ON FOR GETTING TOURS DATA FROM API
  const getTours = async () => {
    try {
      let config = getToken();

      let res = await axios.get(`${API_TOUR}${window.location.search}`, config);
      dispatch({
        type: "getTours",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //? EMD FUNC-ON FOR GETTINF TOURS DATA FROM API

  //! FUNC-ON FOR GET CATEGORIES  & HOTELS FROM API
  const getCategories = async () => {
    try {
      let config = getToken();

      let res = await axios.get(`${API_CATEGORIES}`, config);

      dispatch({
        type: "getCategories",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getHotels = async () => {
    try {
      let config = getToken();

      let res = await axios.get(`${API_HOTELS}`, config);

      dispatch({
        type: "getHotels",
        payload: res.data,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC-ON FOR GET CATEGORIES &HOtels FROM API

  const addHotels = async (newHotel) => {
    try {
      let config = getToken();

      let res = await axios.post(`${API_HOTELS}`, newHotel, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //! FUNC-ON FOR ADD NEW TOUR TO API
  const addTours = async (newTour) => {
    try {
      let config = getToken();

      let res = await axios.post(`${API_TOUR}`, newTour, config);
      console.log(res);
      // navigate("/tours");
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

  const getOneHotel = async (id) => {
    try {
      let config = getToken();

      let res = await axios(`${API_HOTELS}${id}/`, config);
      dispatch({
        type: "getOneHotel",
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
      let res = await axios.post(`${API_TOUR}${id}/like/`, config);
      getTours();
    } catch (error) {
      // Comments?.title?.map()
      console.log(error);
    }
  };

  //? END FUNC-ON FOR LIKES

  //! FUNC-ON FOR COMMENTS

  const comments = async (comment) => {
    try {
      let config = getToken();
      let res = await axios.post(`${API_COMMENTS}`, comment, config);
      // getOneTour(id)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC-ON FOR COMMENTS

  //! FUNC-ON FOR RATING

  const setRating = async (id, rating) => {
    try {
      let config = getToken();

      let res = await axios.post(`${API_TOUR}${id}/rating/`, rating, config);
      getOneTour(id);
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC-ON FOR RATING

  //! FUNC-ON FOR SEARCH

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ search: search }); //q-> country
  }, [search]);

  useEffect(() => {
    // getTours();
  }, [searchParams]);

  //? END FUNC-ON FOR SEARCH

  //! FUNC-ON FOR FILTER

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === "") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  //? END FUNC-ON FOR FILTER

  let value = {
    tours: state.tours,
    oneTour: state.oneTour,
    categories: state.categories,
    hotels: state.hotels,
    page: state.page,
    oneHotel: state.oneHotel,

    searchParams,
    setSearchParams,
    search,
    setSearch,

    getTours,
    getCategories,
    getHotels,
    addHotels,
    getOneTour,
    addTours,
    editTour,
    deleteTour,
    like,
    comments,
    setRating,
    fetchByParams,
    getOneHotel,
  };
  return (
    <toursContext.Provider value={value}>{children}</toursContext.Provider>
  );
};

export default ToursContextProvider;
