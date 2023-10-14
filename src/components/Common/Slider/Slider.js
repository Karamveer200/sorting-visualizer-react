import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const CustomSlider = styled(Slider)({
  color: '#52af77',
  height: 5,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 34,
    height: 34,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, 0%) rotate(-225deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, 0%) rotate(-225deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(225deg)',
    },
  },
});

const DiscreteSlider = ({ label = '', value, setter, min, max }) => {
  return (
    <div
      className='flex flex-col justify-center bg-indigo-700 rounded-lg my-auto max-h-[85%] gap-[4px]'
      style={{ padding: '20px 20px 10px 20px' }}
    >
      <div className='flex justify-between'>
        <label className='text-sm font-semibold text-white'>{label}</label>
        <p className='text-sm font-semibold text-white'>{value}</p>
      </div>
      <Box sx={{ width: 200 }}>
        <CustomSlider
          valueLabelDisplay='auto'
          aria-label='slider'
          defaultValue={value}
          value={value}
          onChange={(e) => setter(e.target.value)}
          min={min}
          max={max}
        />
      </Box>
    </div>
  );
};

export default DiscreteSlider;
