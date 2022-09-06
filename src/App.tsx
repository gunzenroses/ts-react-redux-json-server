import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Contacts, Registration, SignIn, Page404 } from './pages';

import styles from './App.module.scss';
import { Header, Footer } from 'components';

function App() {
  return (
    <>
      <Header isAuth={false} />
      <BrowserRouter>
        <main className={styles.main}>
          <Routes>
            <Route index element={< SignIn />} />
            <Route path='/register' element={ <Registration />} />
            <Route path='/contacts' element={ <Contacts />} />
            <Route path='*' element={ <Page404 />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

