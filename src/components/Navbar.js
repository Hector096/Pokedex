import { IoIosArrowBack } from 'react-icons/io';

import { Link, useMatch } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const match = useMatch({
    path: '/pokemon',
    end: false,
  });

  return (
    <header className={styles.header}>
      {match && (
      <Link to="/" className={styles.back}>
        <IoIosArrowBack size="100%" />
      </Link>
      )}
      <Link to="/">
        <h1>Pokemon metrics</h1>
      </Link>
    </header>
  );
};

export default Navbar;
