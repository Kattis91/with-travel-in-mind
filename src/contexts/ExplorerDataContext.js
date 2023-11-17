import { createContext, useContext, useEffect, useState } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import { axiosReq, axiosRes } from "../api/axiosDefaults";

export const ExplorerDataContext = createContext();
export const SetExplorerDataContext = createContext();

export const useExplorerData = () => useContext(ExplorerDataContext);
export const useSetExplorerData = () => useContext(SetExplorerDataContext);

export const ExplorerDataProvider = ({ children }) => {

  const [explorerData, setExplorerData] = useState({
    pageExplorer: { results: [] },
    popularExplorers: { results: [] },
  });
  
  const currentUser = useCurrentUser();

  const handleFollow = async (clickedExplorer) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedExplorer.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
      <SetExplorerDataContext.Provider value={{setExplorerData, handleFollow}}>
        {children}
      </SetExplorerDataContext.Provider>
    </ExplorerDataContext.Provider>
  )

}