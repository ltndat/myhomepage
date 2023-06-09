import Link from 'next/link';
import React, { useCallback } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
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
  Icon,
} from '@chakra-ui/react';
import icons from '@/globals/icon';
import envs, { links } from './envs';

export const props = {
  Home: {
    icon: icons.home.Icon,
  },
  Work: {
    icon: icons.work.Icon,
  },
  Use: {
    icon: icons.use.Icon,
  },
  Article: {
    icon: icons.article.Icon,
  },
  Source: {
    props: {
      target: '_blank',
    },
    // icon: <FiGithub />,
    icon: icons.other.github.Icon,
  },
};

const pagesRendered = Object.entries(links);

/** @param {{router: import('next/router').NextRouter}}  */
function NavLink({ set, router }) {
  const { route: path, query } = router;

  const isActive = useCallback(
    /** @param {string} p  */
    (p) => {
      if (query?.page) {
        return p.startsWith(`/${query.page}`);
      }
      if (p === '/') {
        if (path === '/') return true;
      } else if (path.startsWith(p)) return true;
      return false;
    },
    [path, query.page],
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
            <Button
              backgroundColor={isActive(item.href) && 'second'}
              as={Link}
              variant="unstyled"
              title={set[id]}
              // locale={lang}
              p={2}
              minWidth="60px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="md"
              href={item.href}
              borderRadius="4px"
              {...props[id]?.props}
            >
              {props[id]?.icon && <Icon as={props[id].icon} boxSize="18px" />}
              <Text ml={props[id]?.icon && 2}>{set[id]}</Text>
            </Button>
          </ListItem>
        ))}
      </List>
      <Box display={{ base: 'block', md: 'none' }} ml={2}>
        <Menu
          isLazy
          // closeOnSelect closeOnBlur={false}
        >
          <MenuButton title="Menu" as={Button} p={2} w="48px">
            <Icon
              as={AiOutlineMenu}
              boxSize="24px"
              transform="translateY(2px)"
            />
          </MenuButton>
          <MenuList>
            {pagesRendered.map(([id, item]) => (
              <MenuItem
                key={id}
                title={set[id]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={1}
                style={{ height: envs.height }}
              >
                <Button
                  variant="unstyled"
                  backgroundColor={isActive(item.href) && 'second'}
                  as={Link}
                  // p={0}
                  // locale={lang}
                  minWidth="100%"
                  height="48px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="md"
                  href={item.href}
                  borderRadius="4px"
                  {...props[id]?.props}
                >
                  {props[id]?.icon && (
                    <Icon as={props[id].icon} boxSize="18px" />
                  )}
                  <Text ml={props[id]?.icon && 2}>{set[id]}</Text>
                </Button>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
export default NavLink;
