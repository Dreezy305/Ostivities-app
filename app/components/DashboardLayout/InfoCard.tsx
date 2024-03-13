import Image from 'next/image';
import Link from 'next/link';

interface PropsI {
  status: string;
  title: string;
  about: string;
  image: string;
  url: string;
}

const InfoCard = ({ status, title, about, image, url }: PropsI) => {
  return (
    <Link
      href={url}
      className="block relative overflow-hidden h-[210px] rounded-[50px]"
    >
      <Image
        src={image}
        alt=""
        width={230}
        height={235}
        className="rounded-[50px] h-full w-full"
      />
      <div className="absolute inset-0 bg-image-card text-white">
        <div className="absolute top-0 right-0 py-3 px-4 bg-OWANBE_PRY rounded-bl-[1.25rem]">
          {status}
        </div>
        <div className="absolute bottom-0 left-0 px-5 py-5">
          <h3>{title}</h3>
          <div className="flex-center gap-2 mt-1">
            <Image src="/icons/folder.svg" alt="" height={18} width={18} />
            <span className="text-xs">{about}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
