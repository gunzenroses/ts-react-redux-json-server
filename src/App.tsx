import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Contacts, Registration, SignIn, Page404 } from './pages';
import { Header, Footer } from 'components';

import styles from './App.module.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route index element={<Contacts />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </main> 
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;





