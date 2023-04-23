import React, { useCallback } from 'react';
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import {
  Box,
  Button,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import envs from './envs';
import data from './data';
import { getSet } from '@/_globals/sets';

export const props = {
  Home: {
    // icon: <AiFillHome />,
  },
  Work: {
    // icon: <MdWork />,
  },
  Use: {
    // icon: <MdWork />,
  },
  Source: {
    props: {
      target: '_blank',
    },
    icon: <AiFillGithub />,
  },
};

const pagesRendered = Object.entries(data);

/** @param {{path: string}}  */
function NavLink({ lang = 'en', path }) {
  // const set = sets?.[lang] || sets.en;
  const set = getSet('Navbar', lang);
  const isActive = useCallback(
    /** @param {string} p  */
    (p) => {
      if (p === '/') {
        if (path === '/') return true;
      } else if (path.startsWith(p)) return true;
      return false;
    },
    [path],
  );
  return (
    <Box display="flex" alignItems="center" ml={1}>
      <List display={{ base: 'none', md: 'flex' }}>
        {pagesRendered.map(([id, item]) => (
          <ListItem
            key={id}
            title={id}
            display="flex"
            alignItems="center"
            justifyContent="center"
            ml={2}
            style={{ height: envs.height }}
          >
            <Box
              className={isActive(item.href) && 'second-btn'}
              as={Link}
              p={2}
              minWidth="60px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="md"
              href={item.href}
              locale={false}
              borderRadius="4px"
              {...props[id]?.props}
            >
              {props[id]?.icon}
              <Text ml={props[id]?.icon && 2}>{set[id]}</Text>
            </Box>
          </ListItem>
        ))}
      </List>
      <Box display={{ base: 'block', md: 'none' }} ml={2}>
        <Menu isLazy>
          <MenuButton as={Button}>
            <AiOutlineMenu size={24} />
          </MenuButton>
          <MenuList>
            {pagesRendered.map(([id, item]) => (
              <MenuItem
                key={id}
                title={id}
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={1}
                style={{ height: envs.height }}
              >
                <Box
                  className={isActive(item.href) && 'second-btn'}
                  as={Link}
                  locale={false}
                  // p={0}
                  minWidth="100%"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="md"
                  href={item.href}
                  borderRadius="4px"
                  {...props[id]?.props}
                >
                  {props[id]?.icon}
                  <Text ml={props[id]?.icon && 2}>{set[id]}</Text>
                </Box>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
export default NavLink;
