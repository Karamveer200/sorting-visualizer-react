/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../../assets/logo.png';
import { useLocation } from 'react-router-dom';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ALL_ROUTES_PATHS } from '../../../utils/routes';

const Dropdown = ({ title = '', data = [] }) => (
  <div
    className={`${'text-gray-300 hover:bg-indigo-600 hover:text-white border-transparent rounded-md'}
    pl-3 pr-7 py-2 text-xs lg:text-13px font-medium border-b-2 whitespace-nowrap relative group z-50 `}>
    {title}
    <KeyboardArrowDownIcon className={classes.arrow} />
    <div>
      <div className="absolute w-[250px] bg-gray-800 border-2 border-indigo-600 rounded-md p-[5px] z-50 left-[-55%] top-[30px] hidden group-hover:inline-block transition-all 200ms ease-in">
        {data.map((item) => (
          <Link
            key={item.pathName}
            to={item.pathName}
            className=" w-full h-10 rounded-md flex items-center  hover:bg-indigo-500 cursor-pointer px-3">
            {item.heading}
          </Link>
        ))}
      </div>
    </div>
  </div>
);
export default function Header() {
  return (
    <div className={`relative headerPurpleBG z-50`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 z-50">
        <div className="flex h-16 sm:h-20 justify-between z-50">
          <div className="flex z-50">
            <Link to={ALL_ROUTES_PATHS.LANDING} className="flex z-20">
              <div
                className={`${classes.reduceLineHeight} text-xs sm:text-xl lg:text-2xl ml-4 flex items-center bold pinkWhiteText GrindFontFamily max-w-min xl:max-w-max`}>
                Sorting Visualizer
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
