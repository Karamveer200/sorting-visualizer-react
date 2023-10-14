import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import FallbackLoader from './components/Common/FallbackLoader/FallbackLoader';
import Header from './components/Common/Header/Navbar';

import { ALL_ROUTES } from './utils/routes';

function App() {
  return (
    <div className={`h-screen`}>
      <Header />
      <div className={`w-full h-full`}>
        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            {ALL_ROUTES.map((item, index) => (
              <Route path={item.pathName} element={<item.Component />} key={index} />
            ))}

            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
