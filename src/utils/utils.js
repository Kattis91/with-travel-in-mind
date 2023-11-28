import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

export const followHelper = (explorer, clickedExplorer, following_id) => {
  return explorer.id === clickedExplorer.id
    ? {
        ...explorer,
        followers_count: explorer.followers_count + 1,
        following_id,
      }
    : explorer.is_owner
    ? 
      {...explorer, following_count: explorer.following_count + 1 }
    : 
      explorer;
  };

export const unfollowHelper = (explorer, clickedExplorer) => {
  return explorer.id === clickedExplorer.id
    ? {
        ...explorer,
        followers_count: explorer.followers_count - 1,
        following_id: null,
      }
    : explorer.is_owner
    ? { ...explorer, following_count: explorer.following_count - 1 }
    : explorer;
}

export const fanHelper = (explorer, clickedExplorer, favoriting_id) => {
  return explorer.id === clickedExplorer.id
    ? {
        ...explorer,
        favourites_count: explorer.favourites_count + 1,
        favoriting_id,
      }
    : explorer.is_owner
    ? 
      {...explorer, favoriting_count: explorer.favoriting_count + 1 }
    : 
      explorer;
  };

export const unfanHelper = (explorer, clickedExplorer) => {
  return explorer.id === clickedExplorer.id
    ? {
        ...explorer,
        favourites_count: explorer.favourites_count - 1,
        favoriting_id: null,
      }
    : explorer.is_owner
    ? { ...explorer, favoriting_count: explorer.favoriting_count - 1 }
    : explorer;
}


export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {
    // console.log(err)
  }
};

export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};