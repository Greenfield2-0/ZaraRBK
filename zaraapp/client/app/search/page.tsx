import React from 'react';
import Search from "./search";

const isClient = typeof window !== 'undefined';

const Display: React.FC = () => {
  return (
    <div>
      {isClient && <Search />}
    </div>
  );
};

export default Display;
