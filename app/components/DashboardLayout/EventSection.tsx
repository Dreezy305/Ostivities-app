import Link from 'next/link';

interface PropsI {
  title: string;
  uri?: string;
  children: React.ReactNode;
}

const EventSection = ({ title, uri, children }: PropsI) => {
  return (
    <section>
      <div className="flex-center justify-between">
        <h2 className="font-semibold text-3xl mb-7">{title}</h2>
        {uri && (
          <Link href={uri} className="font-semibold text-OWANBE_PRY">
            See More {'>'}
          </Link>
        )}
      </div>
      <div className="grid grid-cols-5 gap-4">{children}</div>
    </section>
  );
};

export default EventSection;
{
}
