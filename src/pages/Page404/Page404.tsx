
import styles from './Page404.module.scss';

const Page404 = () => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>Oops, there is no such page</p>
    </div>
  )
};

export { Page404 };