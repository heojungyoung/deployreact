import React, { useState } from 'react';
import HomeComponent from '../../pages/Home';
import ProfileComponent from '../../pages/Profile';
import TablesComponent from '../../pages/Table';
import TestComponent from '../../pages/Test';

const Home = () => <HomeComponent/>;
const Profile = () => <ProfileComponent/>;
const Table = () => <TablesComponent/>;
const Test = () => <TestComponent/>;

const MainComponent = () => {
  const [page, setPage] = useState('home');

  // 상태에 따라 렌더링할 컴포넌트를 선택
  const renderComponent = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'table':
        return <Table />;
      case 'test':
        return <Test/>
      default:
        return <Home />;
    }
  };

  return (
      <div>
        <div style={{marginBottom: '20px'}}>
          <button onClick={() => setPage('home')}>홈</button>
          <button onClick={() => setPage('profile')}>프로필</button>
          <button onClick={() => setPage('table')}>설정</button>
          <button onClick={() => setPage('test')}>list</button>
        </div>
        {renderComponent()}
      </div>
  );
};

export default MainComponent;