import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import useDocumentTitle from './hooks/costum hooks/useDocumentTitle';

const DocTitleOne = lazy(()=>import('./hooks'))
function App() {
  useDocumentTitle('Instagram!')
  return (
    <div className="App">
      <Routes>
        <Route path='/costumHooks' element={<DocTitleOne/>}/>
      </Routes>
    </div>
  );
}

export default App;
