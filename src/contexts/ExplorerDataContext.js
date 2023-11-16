import { createContext, useContext, useEffect, useState } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import { axiosReq } from "../api/axiosDefaults";

export const ExplorerDataContext = createContext();
export const SetExplorerDataContext = createContext();

export const useExplorerData = () => useContext(ExplorerDataContext);
export const useSetExplorereData = () => useContext(SetExplorerDataContext);

export const ExplorerDataProvider = ({ children }) => {

  const [explorerData, setExplorerData] = useState({
    popularExplorers: { results: [] },
  });
  
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/explorers/?ordering=-followers_count"
        );
        setExplorerData((prevState) => ({
          ...prevState,
          popularExplorers: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <ExplorerDataContext.Provider value={explorerData}>
      <SetExplorerDataContext.Provider value={setExplorerData}>
        {children}
      </SetExplorerDataContext.Provider>
    </ExplorerDataContext.Provider>
  )

}