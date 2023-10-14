/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import BodyContainer from '../Common/BodyContainer/BodyContainer';
import Bars from '../Common/Bars/Bars';
import useElementSize from '../../hooks/useElementSize';
import { useState } from 'react';
import { bubbleSort, insertionSort } from '../../utils/sortingFunctions';
import { colors } from '../../utils/colors';
import { generateRandomArray } from '../../utils/helperFunctions';
import { getBarId } from '../../utils/helperFunctions';
import { BarSettingsContext } from '../../context/BarSettings';
import Controls from './Controls';
import { SORTING_SELECTION, ALGORITHM_TABS, ARRAY_KEYS } from '../../utils/constants';

const Index = () => {
  const [currentAlgo, setCurrentAlgo] = useState(ALGORITHM_TABS[0]);

  const { arraySize, delaySpeed } = useContext(BarSettingsContext);

  const [baseArr, setBaseArr] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  const [squareRef, { width, height }] = useElementSize();

  useEffect(() => {
    const randomArray = generateRandomArray(arraySize);
    setBaseArr(randomArray);
  }, [arraySize, currentAlgo]);

  useEffect(() => {
    const arrWithColors = baseArr.map((item, index) => {
      const resetBarColors = document.getElementById(getBarId(index));

      if (resetBarColors?.style) resetBarColors.style.backgroundColor = colors.default;

      return {
        value: item,
        color: colors.default,
        fixedIndex: index,
      };
    });

    setDataArray(arrWithColors);
  }, [baseArr]);

  const onPlayClick = async () => {
    const speed = delaySpeed * 1000;

    if (currentAlgo[ARRAY_KEYS.VALUE] === SORTING_SELECTION.BUBBLE_SORT)
      await bubbleSort([...dataArray], setDataArray, speed);

    console.log('finished');
  };

  return (
    <BodyContainer rootClassName='h-screen ' className='MontserratFamily fadeIn '>
      <Controls
        currentAlgo={currentAlgo}
        setCurrentAlgo={setCurrentAlgo}
        tabs={ALGORITHM_TABS}
        onPlayClick={onPlayClick}
      />
      <div className='lg:pt-0 chart_container'>
        <div
          className='w-full h-full rounded-md overflow-hidden flex p-[20px]'
          style={{ backgroundColor: '#27496D' }}
          ref={squareRef}
        >
          <Bars dataArray={dataArray} getContainerHeight={height} getContainerWidth={width} />
        </div>
      </div>
    </BodyContainer>
  );
};

export default Index;
