import getListingById from "@/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/actions/getCurrentUser";
import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams}) => {
  const listing = await getListingById(params);

  const currentUser = await getCurrentUser();
  if (!listing) {
    return (
      <EmptyState />
    )
  }  
  return (
    <div>
      <ListingClient 
        listing={listing}
        currentUser={currentUser}
      />
    </div>
  )
}

export default ListingPage;