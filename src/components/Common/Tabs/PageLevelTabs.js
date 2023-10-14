import classes from './index.module.css';
import { ARRAY_KEYS } from '../../../utils/constants';
import Button from '../Button/Button';

const PageLevelTabs = ({ tabs = [], currentTab = {}, setCurrentTab = () => {}, onPlayClick }) => {
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <div className={`block `}>
        <div className='flex items-center gap-[15px] justify-between'>
          <div className='flex items-center gap-[15px]'>
            <p className='text-white font-bold text-base'>Sorting Algorithm: </p>
            <nav className={`flex space-x-4`} aria-label='Tabs'>
              {tabs.map((tab) => {
                return (
                  <div
                    key={tab[ARRAY_KEYS.VALUE]}
                    className={`
              ${classes.hover_background_no_count} ${
                      currentTab[ARRAY_KEYS.VALUE] === tab[ARRAY_KEYS.VALUE] && classes.selectedNavTitle
                    }
                ${
                  currentTab[ARRAY_KEYS.VALUE] === tab[ARRAY_KEYS.VALUE]
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:text-gray-500'
                }
               px-4 py-2 text-sm font-medium hover:cursor-pointer flex border-indigo-600 border-2
               `}
                    onClick={() => handleTabClick(tab)}
                  >
                    <div>{tab[ARRAY_KEYS.LABEL]}</div>
                  </div>
                );
              })}
            </nav>
          </div>

          <div>
            <Button
              text='Play'
              isPlayBtn
              onClick={onPlayClick}
              className={`w-full flex justify-center wheel-playBtn`}
              btnClassName='w-[100px] flex justify-center h-8 sm:h-10'
            />
          </div>
        </div>
        <div className={`w-full h-2 mb-4 bg-indigo-600 rounded-lg mt-4`}></div>
      </div>
    </div>
  );
};

export default PageLevelTabs;
