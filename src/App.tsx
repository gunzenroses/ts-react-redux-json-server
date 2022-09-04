import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Contacts, Registration, SignIn, Page404 } from './pages';

import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.main}>
        <Routes>
          <Route index element={< SignIn />} />
          <Route path='/register' element={ <Registration />} />
          <Route path='/contacts' element={ <Contacts />} />
          <Route path='*' element={ <Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

