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
import langs from '@/langs';

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

/** @param {{storage: import('@/@type/features').FeaturesStorage}}  */
function Navbar({ storage }) {
  const router = useRouter();
  const { locale } = router;
  const set = langs[locale || 'en'].Navbar;
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
  }, [router, setDone, setLoading]);

  return (
    <Box
      id="navbar"
      path={router.asPath}
      as="nav"
      style={style.nav}
      zIndex="docked"
    >
      <Container
        maxW={{ sm: 'full', md: '4xl' }}
        style={style.container}
        px={4}
      >
        <Logo width={envs.logoHeight} />
        <Box display="flex">
          <Box display="flex" alignItems="center">
            <LanguageButton />
            <ThemeButton ml={2} />
          </Box>
          <NavLink set={set} router={router} />
        </Box>
      </Container>
      <BallProgress />
    </Box>
  );
}

export default Navbar;
