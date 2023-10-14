import { createContext, useState } from 'react';

export const BarSettingsContext = createContext();

const BarSettingsContextComponent = (props) => {
  const [arraySize, setArraySize] = useState(40);
  const [delaySpeed, setDelaySpeed] = useState(0.01);

  return (
    <BarSettingsContext.Provider
      value={{
        arraySize,
        delaySpeed,
        setArraySize,
        setDelaySpeed,
      }}
    >
      {props.children}
    </BarSettingsContext.Provider>
  );
};

export default BarSettingsContextComponent;
