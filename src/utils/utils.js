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