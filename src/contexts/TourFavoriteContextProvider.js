import { async } from "q";
import React, { useContext, useReducer } from "react";
import { createContext } from "vm";

const tourFavoriteContext = createContext();
export const useTourFavorite = () => useContext(tourFavoriteContext);

let initState = [{ favorites: JSON.parse(localStorage.getItem("favorites")) }];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getFavorites":
      return { ...state, favorites: action.payload };

    default:
      break;
  }
};

const TourFavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  //! get favorites
  const getFavorites = async () => {
    try {
      let myfavorites = JSON.parse(localStorage.getItem("favorites"));
      if (!myfavorites) {
        localStorage.setItem("favorites", JSON.stringify({ favorites: [] }));
        myfavorites = { favorites: [] };
      }
      dispatch({ type: "gerFavorites", payload: myfavorites });
    } catch (error) {
      console.log(error);
    }
  };

  //! add to favorites

  const addToFavorites = async (favorite) => {
    try {
      let myfavorites = JSON.parse(localStorage.getItem("favorites"));
      if (!myfavorites) {
        myfavorites = { favorites: [] };
      }
      let newFavorite = {
        everyFavorite: favorite,
      };

      let hasInFavorite = myfavorites.favorites.filter(
        (item) => item.everyFavorite.id === favorite.id
      );

      if (hasInFavorite.lenght === 0) {
        myfavorites.favorites.push(newFavorite);
      } else {
        myfavorites.favorites = myfavorites.favorites.filter(
          (item) => item.everyFavorite.id !== favorite.id
        );
      }

      myfavorites.favorites.push(newFavorite);

      localStorage.setItem("favorites", JSON.stringify(myfavorites));

      dispatch({ type: "getFavorites", payload: myfavorites });
    } catch (error) {
      console.log(error);
    }
  };

  //! delete fom favorites

  const deleteFromFavorite = async (id) => {
    try {
      let myfavorites = JSON.parse(localStorage.getItem("favorites"));
      myfavorites.favorites.filter((item) => item.everyFavorite.id !== id);
      localStorage.setItem("favorites", JSON.stringify(myfavorites));
      dispatch({ type: "getFavorites", payload: myfavorites });
    } catch (error) {
      console.log(error);
    }
  };

  let value = {
    favorites: state.favorites,
    getFavorites,
    addToFavorites,
    deleteFromFavorite,
  };
  return (
    <tourFavoriteContext.Provider value={value}>
      {children}
    </tourFavoriteContext.Provider>
  );
};

export default TourFavoriteContextProvider;
