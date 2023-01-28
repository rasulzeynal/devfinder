import { useState } from 'react';
import './App.scss';
import Body from './components/body/Body';
import Header from "./components/header/Header";
import Search from './components/search/Search';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  const [data,setData] = useState();

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"} `}>
      <div className='container'>
         <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
         <Search data={data} setData={setData}/>
          <Body  data={data}/>
      </div>
       
    </div>
  );
}

export default App;
