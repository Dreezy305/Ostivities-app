'use client';
import { Button, Input, Space } from 'antd';

const NewsLetter: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <div
        // htmlFor="subscribe"
        className="flex-center shadow-lg bg-white px-3 py-2 rounded-full"
      >
        <input
          type="text"
          placeholder="Your email"
          className="outline-none flex-[30%] w-1/2 bg-white"
        />
        <button className="flex-[20%] w-28 px-4 py-1 !bg-OWANBE_SECONDARY outline-none shadow-none rounded-3xl text-white font-BricolageGrotesqueMedium font-medium hover:text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
