import { createContext, useContext, useEffect, useState } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { fanHelper, followHelper, unfanHelper, unfollowHelper } from "../utils/utils";

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
      setExplorerData((prevState) => ({
        ...prevState,
        pageExplorer: {
          results: prevState.pageExplorer.results.map((explorer) =>
            followHelper(explorer, clickedExplorer, data.id)
          ),
        },
        popularExplorers: {
          ...prevState.popularExplorers,
          results: prevState.popularExplorers.results.map((explorer) =>
            followHelper(explorer, clickedExplorer, data.id)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnfollow = async (clickedExplorer) => {
    try {
      await axiosRes.delete(`/followers/${clickedExplorer.following_id}/`);
      setExplorerData((prevState) => ({
        ...prevState,
        pageExplorer: {
          results: prevState.pageExplorer.results.map((explorer) =>
            unfollowHelper(explorer, clickedExplorer)
          ),
        },
        popularExplorers: {
          ...prevState.popularExplorers,
          results: prevState.popularExplorers.results.map((explorer) =>
            unfollowHelper(explorer, clickedExplorer)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
    }
  };


  const handleFan = async (clickedExplorer) => {
    try {
      const { data } = await axiosRes.post("/favourites/", {
        favorited: clickedExplorer.id,
      });
      setExplorerData((prevState) => ({
        ...prevState,
        pageExplorer: {
          results: prevState.pageExplorer.results.map((explorer) =>
            fanHelper(explorer, clickedExplorer, data.id)
          ),
        },
        popularExplorers: {
          ...prevState.popularExplorers,
          results: prevState.popularExplorers.results.map((explorer) =>
            fanHelper(explorer, clickedExplorer, data.id)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnfan = async (clickedExplorer) => {
    try {
      await axiosRes.delete(`/favourites/${clickedExplorer.favoriting_id}/`);
      setExplorerData((prevState) => ({
        ...prevState,
        pageExplorer: {
          results: prevState.pageExplorer.results.map((explorer) =>
            unfanHelper(explorer, clickedExplorer)
          ),
        },
        popularExplorers: {
          ...prevState.popularExplorers,
          results: prevState.popularExplorers.results.map((explorer) =>
            unfanHelper(explorer, clickedExplorer)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
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
        // console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <ExplorerDataContext.Provider value={explorerData}>
      <SetExplorerDataContext.Provider value={{setExplorerData, handleFollow, handleUnfollow, handleFan, handleUnfan}}>
        {children}
      </SetExplorerDataContext.Provider>
    </ExplorerDataContext.Provider>
  )

}