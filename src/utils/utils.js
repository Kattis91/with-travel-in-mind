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