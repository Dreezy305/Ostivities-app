import React from 'react';
import Image from 'next/image';
import placeholderIMG from '../../../../public/images/placeholder.png';
// import FolderIcon from '../../../utils/icon';

const placeholderImages = [
  {
    Title: 'Tobi weds Shade',
    image: placeholderIMG,
    event: 'Wedding',
    label: 'Get Tickets',
  },
  {
    Title: 'Tobi weds Shade',
    image: placeholderIMG,
    event: 'Wedding',
    label: 'Get Tickets',
  },

  {
    Title: 'Tobi weds Shade',
    image: placeholderIMG,
    event: 'Wedding',
    label: 'Get Tickets',
  },

  {
    Title: 'Tobi weds Shade',
    image: placeholderIMG,
    event: 'Wedding',
    label: 'Get Tickets',
  },
  {
    Title: 'Tobi weds Shade',
    image: placeholderIMG,
    event: 'Wedding',
    label: 'Get Tickets',
  },
];

function Discovery() {
  return (
    <div className="flex gap-[1.25rem] text-white">
      {placeholderImages.map((tiles, i) => (
        <div
          key={i}
          className="h-[244px] w-[236px] rounded-[50px] flex flex-shrink-0 justify-end relative"
        >
          <div className="bg-OWANBE_PRY rounded-tl-[0px] rounded-tr-[50px] rounded-br-[0px] rounded-bl-[20px] flex  justify-center items-center  w-[7.25rem] h-[2.86875rem] font-medium absolute">
            {tiles.label}
          </div>
          <div className="flex flex-col absolute bottom-2 left-16">
            <span className=" text-lg">{tiles.Title}</span>
            <div className="flex  items-center gap-1">{FolderIcon}Wedding</div>
          </div>
          <Image src={tiles.image} alt="placeholder" width={500} height={500} />
        </div>
      ))}
    </div>
  );
}

export default Discovery;

const FolderIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} fill="none">
    <mask
      id="a"
      width={17}
      height={17}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.5.5h15.522v15.502H.5V.5Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.732 1.625c-2.178 0-3.107 1.107-3.107 3.7v5.849c0 2.388 1.318 3.703 3.713 3.703h5.836c2.388 0 3.703-1.315 3.703-3.703v-.002l.02-3.724c0-2.55-.874-3.543-3.12-3.543H9.655a2.29 2.29 0 0 1-1.82-.909l-.684-.91a1.154 1.154 0 0 0-.92-.461H4.732Zm6.442 14.377H5.338C2.354 16.002.5 14.152.5 11.174v-5.85C.5 2.124 1.924.5 4.732.5h1.5c.713 0 1.393.341 1.819.91l.683.91c.217.288.561.46.921.46h2.122c2.897 0 4.246 1.484 4.246 4.671l-.021 3.725c-.001 2.976-1.85 4.826-4.828 4.826Z"
        clipRule="evenodd"
      />
    </g>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.537 10.785H4.985a.563.563 0 0 1 0-1.125h6.552a.563.563 0 0 1 0 1.125Z"
      clipRule="evenodd"
    />
  </svg>
);
