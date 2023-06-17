import getFavoriteListings from "@/actions/gerFavoriteListings";
import EmptyState from "../components/EmptyState";

import getCurrentUser from "@/actions/getCurrentUser";
import FavoriteClient from "./FavoriteClient";

const FavoritePage = async () => {

  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) return (
    <EmptyState 
      title="You haven't favorited any listings yet"
      subtitle="Search and find some of your favorites property!"
    />
  )
  return (
    <FavoriteClient 
      listings={listings}
      currentUser={currentUser}

    />
  )
}

export default FavoritePage;