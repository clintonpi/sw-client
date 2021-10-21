import { Circle } from './Styles';
import React from 'react';

const Loader: React.FC = () => (
  <>
    <Circle />
    <p className="text-center text-highlight mt-2">{'Patience you must have, my young Padawan'}</p>
  </>
);

export default Loader;
