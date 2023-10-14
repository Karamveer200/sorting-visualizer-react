import React from 'react';
import PageLevelTabs from '../Common/Tabs/PageLevelTabs';

const Controls = ({ currentAlgo, setCurrentAlgo, tabs, onPlayClick, isPlayDisabled }) => {
  return (
    <div>
      <PageLevelTabs
        currentTab={currentAlgo}
        setCurrentTab={setCurrentAlgo}
        tabs={tabs}
        onPlayClick={onPlayClick}
        isPlayDisabled={isPlayDisabled}
      />
    </div>
  );
};

export default Controls;
