import React from 'react';
import PageLevelTabs from '../Common/Tabs/PageLevelTabs';

const Controls = ({ currentAlgo, setCurrentAlgo, tabs, onPlayClick }) => {
  return (
    <div>
      <PageLevelTabs
        currentTab={currentAlgo}
        setCurrentTab={setCurrentAlgo}
        tabs={tabs}
        onPlayClick={onPlayClick}
      />
    </div>
  );
};

export default Controls;
