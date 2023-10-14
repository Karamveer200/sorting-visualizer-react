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
import pianoSound from '../../assets/piano.mp3';
import { useAudioPlayer } from 'react-use-audio-player';

const Index = () => {
  const { load: loadSound, stop: stopSound } = useAudioPlayer();

  const [currentAlgo, setCurrentAlgo] = useState(ALGORITHM_TABS[0]);

  const { arraySize, delaySpeed } = useContext(BarSettingsContext);

  const [baseArr, setBaseArr] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  const [squareRef, { width, height }] = useElementSize();
  const [isAlgorithmRunning, setIsAlgorithmRunning] = useState(false);

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
    setIsAlgorithmRunning(true);

    // loadSound(pianoSound, {
    //   format: 'mp3',
    //   autoplay: true,
    //   loop: true,
    // });

    const speed = delaySpeed * 1000;

    switch (currentAlgo[ARRAY_KEYS.VALUE]) {
      case SORTING_SELECTION.BUBBLE_SORT:
        await bubbleSort([...dataArray], setDataArray, speed);
        break;
      case SORTING_SELECTION.INSERTION_SORT:
        await insertionSort([...dataArray], setDataArray, speed);
        break;
      default:
    }

    stopSound();
    setIsAlgorithmRunning(false);
  };

  return (
    <BodyContainer rootClassName='h-screen ' className='MontserratFamily fadeIn '>
      <Controls
        currentAlgo={currentAlgo}
        setCurrentAlgo={setCurrentAlgo}
        tabs={ALGORITHM_TABS}
        onPlayClick={onPlayClick}
        isPlayDisabled={isAlgorithmRunning}
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
