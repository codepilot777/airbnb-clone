import EmptyState from "../components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import PropertiesClient from "./PropertyClient";
import ClientOnly from "../components/ClientOnly";

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
      <ClientOnly>
        <EmptyState
          title="No Properties found"
          subtitle="Looks like you have no properties"
        />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <PropertiesClient 
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default PropertiesPage;