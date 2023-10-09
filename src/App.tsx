import React from 'react';
import './styles/styles.scss';
import NavigationMenu from './components/navigationMenu';
import Content from './components/contant';

const App: React.FC = () => {
  return (
    <div className='App'>
       <div className='App-container'>
          <NavigationMenu/>
          <Content/>
       </div>
    </div>
  );
}

export default App;