import { getBarId } from '../../../utils/helperFunctions';

const Bar = ({ value, barColor, barHeight, barWidth, fixedIndex }) => {
  return (
    <div
      className='flex text-center items-center justify-center barHover'
      style={{ height: `${barHeight}px`, width: `${barWidth}px`, backgroundColor: barColor }}
      id={getBarId(fixedIndex)}
      data-val={value}
    ></div>
  );
};

const Bars = ({ dataArray, getContainerHeight = 100, getContainerWidth = 100 }) => {
  const dataArrayValues = dataArray.map((item) => item.value);

  const max = Math.max.apply(Math, dataArrayValues);
  const min = Math.min.apply(Math, dataArrayValues);

  const HEIGHT_OFFSET = 40;
  const WIDTH_OFFSET = 20;

  const scaleFactor = (getContainerHeight - HEIGHT_OFFSET - 40) / (max - min);
  const barWidth = (getContainerWidth - WIDTH_OFFSET) / dataArray.length;

  return (
    <div
      className='flex justify-stretch gap-[5px]'
      style={{ transform: 'rotate(180deg) scaleX(-1)', width: 'inherit' }}
    >
      {dataArray.map((item) => {
        const value = item.value;
        const barHeight = (value - min) * scaleFactor + HEIGHT_OFFSET;
        const barColor = item.color;
        const fixedIndex = item.fixedIndex;

        return (
          <Bar
            value={value}
            barColor={barColor}
            barHeight={barHeight}
            barWidth={barWidth}
            fixedIndex={fixedIndex}
            key={fixedIndex}
          />
        );
      })}
    </div>
  );
};

export default Bars;
