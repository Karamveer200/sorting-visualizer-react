/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import BodyContainer from '../Common/BodyContainer/BodyContainer';
import Bars from '../Common/Bars/Bars';
import useElementSize from '../../hooks/useElementSize';
import { useState } from 'react';
import { bubbleSort, insertionSort } from '../../utils/sortingFunctions';

const Index = () => {
  const arr = [19, 2, 20, 30, 19, 25, 10, 50, 20, 4, 9, 9];

  const [squareRef, { width, height }] = useElementSize();
  const [dataArray, setDataArray] = useState(arr);

  const delay = 100;

  const handle = async () => {
    await insertionSort([...dataArray], setDataArray, delay);
  };

  return (
    <BodyContainer rootClassName='h-screen ' className='MontserratFamily'>
      <div className='lg:pt-0 chart_container'>
        <div className='bg-white w-full h-full rounded-md overflow-hidden flex p-[20px]' ref={squareRef}>
          <Bars dataArray={dataArray} getContainerHeight={height} getContainerWidth={width} />
        </div>

        <button className='bg-white' onClick={handle}>
          Change
        </button>
      </div>
    </BodyContainer>
  );
};

export default Index;
