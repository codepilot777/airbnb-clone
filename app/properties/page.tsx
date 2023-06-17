import EmptyState from "../components/EmptyState";

import getCurrentUser from "@/actions/getCurrentUser";
import getListings from "@/actions/getListings";
import PropertiesClient from "./PropertyClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <EmptyState
        title="Not authorized"
        subtitle="Please login"
      />
    )
  }
  const listings = await getListings({
    userId: currentUser.id
  });

  if (listings.length ===0 ) {
    return (
      <EmptyState
        title="No Properties found"
        subtitle="Looks like you have no properties"
      />
    )
  }
  return (
    <PropertiesClient 
      listings={listings}
      currentUser={currentUser}
    />
  )
}

export default PropertiesPage;