import getFavoriteListings from "@/app/actions/gerFavoriteListings";
import EmptyState from "../components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import FavoriteClient from "./FavoriteClient";
import ClientOnly from "../components/ClientOnly";

const FavoritePage = async () => {

  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) return (
    <ClientOnly>
      <EmptyState 
        title="You haven't favorited any listings yet"
        subtitle="Search and find some of your favorites property!"
      />
    </ClientOnly>
  )
  return (
    <ClientOnly>
      <FavoriteClient 
        listings={listings}
        currentUser={currentUser}
  
      />
    </ClientOnly>
  )
}

export default FavoritePage;