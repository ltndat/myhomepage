import { Router, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Logo from '../Brand';
import ThemeButton from '../ThemeButton';
import LanguageButton from '../LanguageButton';
import BallProgress from '../BallProgress';
import useProgress from '@/features/hooks/useProgress';
import NavLink from './NavLink';
import envs from './envs';

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  nav: {
    left: 0,
    right: 0,
    top: 0,
    backdropFilter: 'blur(10px)',
    position: 'fixed',
  },
  container: {
    height: envs.height,
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
  },
  linkActive: {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
};

function Navbar({ lang = 'en' }) {
  const router = useRouter();
  const { setLoading, setDone } = useProgress();

  useEffect(() => {
    const handleChangeStart = (url) => url !== router.pathname && setLoading();
    const handleChangeComplete = () => setDone();

    Router.events.on('routeChangeStart', handleChangeStart);
    Router.events.on('routeChangeComplete', handleChangeComplete);
    return () => {
      Router.events.off('routeChangeStart', handleChangeStart);
      Router.events.off('routeChangeComplete', handleChangeComplete);
    };
  }, [router]);

  return (
    <Box
      id="navbar"
      path={router.pathname}
      as="nav"
      style={style.nav}
      zIndex="docked"
    >
      <Container maxW={{ sm: 'full', md: '3xl' }} style={style.container}>
        <Logo width={envs.logoHeight} />
        <Box display="flex">
          <Box display="flex" alignItems="center">
            <LanguageButton lang={lang} />
            <ThemeButton lang={lang} ml={2} />
          </Box>
          <NavLink lang={lang} path={router.pathname} />
        </Box>
      </Container>
      <BallProgress />
    </Box>
  );
}

export default Navbar;
