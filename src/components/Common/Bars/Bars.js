import React from 'react';

const Bar = ({ item, index, barHeight, barWidth }) => {
  return (
    <div
      className='bg-indigo-200 flex text-center items-center justify-center'
      style={{ height: `${barHeight}px`, width: `${barWidth}px` }}
    >
      <p className='text-xl font-semibold' style={{ transform: 'rotate(180deg) scaleX(-1)' }}>
        {item}
      </p>
    </div>
  );
};

const Bars = ({ dataArray, getContainerHeight = 100, getContainerWidth = 100 }) => {
  const max = Math.max.apply(Math, dataArray);
  const min = Math.min.apply(Math, dataArray);

  const HEIGHT_OFFSET = 40;
  const WIDTH_OFFSET = 20;

  const scaleFactor = (getContainerHeight - HEIGHT_OFFSET - 40) / (max - min);
  const barWidth = (getContainerWidth - WIDTH_OFFSET) / dataArray.length;

  return (
    <div
      className='flex justify-stretch gap-[5px]'
      style={{ transform: 'rotate(180deg) scaleX(-1)', width: 'inherit' }}
    >
      {dataArray.map((item, index) => {
        const barHeight = (item - min) * scaleFactor + HEIGHT_OFFSET;

        return <Bar item={item} barHeight={barHeight} barWidth={barWidth} index={index} key={index} />;
      })}
    </div>
  );
};

export default Bars;
