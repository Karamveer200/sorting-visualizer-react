import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { ALL_ROUTES_PATHS } from '../../../utils/routes';
import Slider from '../Slider/Slider';
import { BarSettingsContext } from '../../../context/BarSettings';
import { useContext } from 'react';

const Header = () => {
  const { arraySize, delaySpeed, setArraySize, setDelaySpeed } = useContext(BarSettingsContext);

  return (
    <div className='w-full top-0 z-50'>
      <div className={`relative headerPurpleBG z-50`}>
        <div className='mx-auto px-4 sm:px-6 lg:px-8 z-50'>
          <div className='flex h-16 sm:h-20 justify-between z-50'>
            <div className='flex z-50'>
              <Link to={ALL_ROUTES_PATHS.LANDING} className='flex z-20'>
                <div
                  className={`${classes.reduceLineHeight} text-xs sm:text-xl lg:text-2xl ml-4 flex items-center bold pinkWhiteText GrindFontFamily`}
                >
                  Sorting Visualizer
                </div>
              </Link>
            </div>

            <div className='flex gap-[30px]'>
              <Slider label='Array Size' value={arraySize} setter={setArraySize} min={5} max={150} />
              <Slider label='Delay speed (s)' value={delaySpeed} setter={setDelaySpeed} min={0} max={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
