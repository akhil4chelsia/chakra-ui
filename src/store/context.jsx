import React, { createContext, useContext, useEffect, useState } from 'react';
//import { useQuery } from 'react-query';

const initialState = {
  activeMenu: 'Devices',
  activNav : 'Home'
}

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({});

  // const getTeams = async () => {
  //   // Use our imaginary fetchTeams() function to fetch
  //   // all active teams from our backend.
  //   // Set the first one as our initially selected team
  //   const { teams } = await fetchTeams();
  //   setTeam(teams[0]);
  //   return teams;
  // };

  // const { isLoading, data } = useQuery(['teams'], getTeams);

  return (
    <StoreContext.Provider
      value={{ ...store, setStore }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(AppContext);