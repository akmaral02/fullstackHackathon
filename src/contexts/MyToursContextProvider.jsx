import React, { createContext, useContext, useReducer } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/function";

export const myToursContext = createContext();
export const useMyTour = () => useContext(myToursContext);

let initState = [{ mytours: JSON.parse(localStorage.getItem("mytours")) }];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getMyTours":
      return { ...state, mytours: action.payload };

    default:
      break;
  }
};

const MyToursContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  //! FUNC FOR GET DATA FROM LOCALSTORAGE
  const getMyTours = async () => {
    try {
      let mytours = JSON.parse(localStorage.getItem("mytours"));
      if (!mytours) {
        localStorage.setItem(
          "maytours",
          JSON.stringify({ tours: [], totalPrice: 0 })
        );

        //! for changing state
        mytours = {
          tours: [],
          totalPrice: 0,
        };
      }
      dispatch({ type: "getMyTours", payload: mytours });
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC FOR GET DATA FROM LOCALSTORAGE

  //! FUNC FOR ADDIN DATA TO LOCALSTORAGE

  const addToMyTours = (tour) => {
    try {
      let mytours = JSON.parse(localStorage.getItem("mytours"));
      //* mytours -- key of localStorage
      //* tours -- key in our object in local typeof is array and there we will keep our every tour/obj
      if (!mytours) {
        mytours = {
          tours: [],
          totalPrice: 0,
        };
      }
      let newTour = {
        everyTour: tour, //* there we save all data of our tour
        member: 1,
        subPrice: +tour.price,
      };

      //! for checking has in localStorage already this tour or not

      let hasTourInMyTours = mytours.tours.filter(
        (elem) => elem.everyTour.id === tour.id
      );

      if (hasTourInMyTours.lenght === 0) {
        mytours.tours.push(newTour);
      } else {
        mytours.tours = mytours.tours.filter(
          (elem) => elem.everyTour.id !== tour.id
        );
      }

      mytours.tours.push(newTour);

      //! add func for calculate  total price

      mytours.totalPrice = calcTotalPrice(mytours.tours);
      localStorage.setItem("mytour", JSON.stringify(mytours));
      dispatch({ type: "getMyTours", payload: mytours });
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC FOR ADDIN DATA TO LOCALSTORAGE

  //! FUNC FOR DELETE FROM LOCALSTORAGE

  const deleteFromMyTours = (id) => {
    try {
      let mytours = JSON.parse(localStorage.getItem("mytours"));
      mytours.tours.filter((tour) => tour.everyTour.id !== id);
      mytours.totalPrice = calcTotalPrice(mytours.tours);
      localStorage.setItem("mytours", JSON.stringify(mytours));
      dispatch({
        type: "getMyTours",
        payload: mytours,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //? END FUNC FOR DELETE FROM LOCALSTORAGE

  //* MAYBE FUNC FOR CHECKING HAVE IN LOCAL THIS OBJECT IF IT HAS CHANGE COLOR
  //* HOW TO DO TO CHANGE THE QUANTITY OF MEMBERS FROM BACK DATABASE WHEN WE CHANGE IN LOCALSTORAGE

  //! FUNC FOR CHANGING COUNT OF MEMBERS

  const incrementCountOfMembers = (id) => {
    let mytours = JSON.parse(localStorage.getItem("mytours"));
    mytours.tours = mytours.tours.map((tour) => {
      if (tour.everyTour.id === id) {
        // && API.count/availibility !==0
        tour.member = tour.member + 1;
        tour.subPrice = calcSubPrice(tour);
      }
      return tour;
    });
    mytours.totalPrice = calcTotalPrice(mytours.tours);
    localStorage.setItem("mytours", JSON.stringify(mytours));
    dispatch({ type: "getMyTours", payload: mytours });
  };

  const decrementCountOfMembers = (id) => {
    let mytours = JSON.parse(localStorage.getItem("mytours"));
    mytours.tours.map((tour) => {
      if (tour.everyTour.id === id && tour.member !== 1) {
        tour.member = tour.member - 1;
        tour.subPrice = calcSubPrice(tour);
      }
      return tour;
    });
    mytours.totalPrice = calcTotalPrice(mytours.tours);
    localStorage.setItem("mytours", JSON.stringify(mytours));
    dispatch({
      type: "getMyTours",
      payload: mytours,
    });
  };

  //? END FUNC FOR CHANGING COUNT OF MEMBERS

  let value = {
    mytours: state.mytours,
    getMyTours,
    addToMyTours,
    deleteFromMyTours,
    incrementCountOfMembers,
    decrementCountOfMembers,
  };
  return (
    <myToursContext.Provider value={value}>{children}</myToursContext.Provider>
  );
};

export default MyToursContextProvider;
