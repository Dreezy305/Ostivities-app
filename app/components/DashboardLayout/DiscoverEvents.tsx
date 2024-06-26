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
        image="/images/placeholder.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Agbaya Linkup"
        about="hangout"
        status="sold out"
        image="/images/wed.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Concert with Davido"
        about="Concert"
        status="Get Tickets"
        image="/images/placeholder.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Agbaya Linkup"
        about="hangout"
        status="sold out"
        image="/images/wed.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Agbaya Linkup"
        about="hangout"
        status="sold out"
        image="/images/wed.png"
        url="/Dashboard/discovery/1"
      />
    </EventSection>
  );
};

export default DiscoverEvents;
