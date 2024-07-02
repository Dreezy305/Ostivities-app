import Link from 'next/link';
import InfoCard from './InfoCard';
import EventSection from './EventSection';

const DiscoverEvents = () => {
  return (
    <EventSection title="Discover Events">
      <InfoCard
        title="Concert with Davido"
        about="Concert"
        status="Get Tickets"
        image="/images/placeholder-1.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Muslim Tech Expo"
        about="Event"
        status="sold out"
        image="/images/placeholder-2.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Tobi weds Shade"
        about="Wedding"
        status="Get Tickets"
        image="/images/placeholder-4.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Agbaya Linkup"
        about="Hangout"
        status="sold out"
        image="/images/placeholder-5.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Concert with Davido"
        about="Concert"
        status="sold out"
        image="/images/placeholder.png"
        url="/Dashboard/discovery/1"
      />
    </EventSection>
  );
};

export default DiscoverEvents;
