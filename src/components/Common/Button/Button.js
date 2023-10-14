import React from 'react';
import { PlayIcon } from '@heroicons/react/20/solid';
import classes from './Button.module.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '5px 8px',
  backgroundColor: '#22c55e',
  width: '100px',
  display: 'flex',
  justifyContent: 'space-evenly',
  fontSize: 19,
  borderRadius: '10px',
});

const ButtonWrapper = ({
  text = '',
  className = '',
  isPlayBtn = false,
  allowFullWidth = false,
  onClick = () => {},
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className={`flex-shrink-0 ${className} ${allowFullWidth && 'w-full'} `}>
      <BootstrapButton variant='contained' onClick={handleClick}>
        {isPlayBtn && (
          <div className=''>
            <PlayIcon className={`text-white ${classes.icon}`} aria-hidden='true' sx={{ width: 30 }} />
          </div>
        )}
        {text}
      </BootstrapButton>
    </div>
  );
};

export default ButtonWrapper;
