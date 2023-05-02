import React, { useCallback } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { langs } from '@/_globals/sets';
import { expiresDay } from '@/utils/cookie';
import envs from './envs';

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  select: {
    // width: '44px',
    height: '44px',
  },
  option: {
    height: '44px',
  },
};

function LanguageButton({ lang = 'en' }) {
  const router = useRouter();
  const handleChangeLang = useCallback(
    /** @param {Event} e */
    (e) => {
      // const value = Cookies.get('lang');
      if (lang === e.target.value) return;

      router.push(router.asPath, '', {
        locale: e.target.value,
        scroll: false,
      });
      Cookies.set('lang', e.target.value, {
        path: '/',
        expires: expiresDay(365),
      });
    },
    [lang, router],
  );

  return (
    <Menu>
      <MenuButton as={Button} style={style.select}>
        {lang}
      </MenuButton>
      <MenuList p={2}>
        {langs.map((i) => (
          <MenuItem
            key={i}
            as={Button}
            className={i === lang && 'second-btn'}
            // as="span"
            value={i}
            style={style.option}
            onClick={handleChangeLang}
            mt={1}
          >
            {envs?.[i]}
            <Text ml={2}>{i}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default LanguageButton;
