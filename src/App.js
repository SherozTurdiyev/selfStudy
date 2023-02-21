import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import classes from './App.module.scss'
import Counter from './components/Counter/Counter';
import InputSumbit from './components/InputSubmit/InputSumbit';
import Filter from './components/Filter/Filter';
import Search from './layout/Search';
const DocTitleOne = lazy(() => import('./layout/DocumentTitle'))
function App() {
  useDocumentTitle('Instagram!')
  return (
    <div className={classes["App"]}>
      <Filter />
      <Routes>
        <Route path='/documentTitleHooks' element={<DocTitleOne />} />
        <Route path='/counterHooks' element={<Counter />} />
        <Route path='/inputHooks' element={<InputSumbit />} />
        <Route path='/search/:query' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
