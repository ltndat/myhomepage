/**
 * Base on
 * Chakra-ui: https://chakra-ui.com/
 */

import { extendTheme, defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Button = defineStyleConfig({
  baseStyle: {
    minH: '44px',
    minW: '44px',
  },
});

/** @type {import('@chakra-ui/react').StyleConfig} */
const styles = {
  global: (props) => ({
    body: {
      bg: mode('#f1e7db', '#192227')(props),
      // bg: mode('#f8f9f4', '#192227')(props),
      // bg: mode('#edefee', '#192227')(props),
      // bg: mode('#f7efed', '#192227')(props),
    },
    '.overlay': {
      bg: mode('blackAlpha.200', 'whiteAlpha.300')(props),
      boxShadow: 'base',
      borderLeft: '2px solid',
    },
    'body .prim-btn': {
      bg: mode(
        'var(--chakra-colors-prim)',
        'var(--chakra-colors-primdark)',
      )(props),
      color: mode('', 'var(--chakra-colors-chakra-body-bg)')(props),
    },
    'body .prim-btn-outline': {
      color: mode(
        'var(--chakra-colors-prim)',
        'var(--chakra-colors-primdark)',
      )(props),
    },
    'body .second-btn': {
      bg: 'var(--chakra-colors-second)',
      color: mode('', 'var(--chakra-colors-chakra-body-bg)')(props),
    },
    'body .second-btn-outline': {
      color: 'var(--chakra-colors-second)',
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

/** @type {import('@chakra-ui/react').Theme} */
const theme = extendTheme({
  config,
  styles,
  components: {
    Button,
  },
  fonts: {
    heading: "'Signika Negative', sans-serif",
    body: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    mono: "'Roboto Mono', monospace",
    deco: "'Lobster Two', cursive",
    handwrite: "'Merienda', cursive",
    // fontSerif: "Roboto Slab', serif",
  },
  colors: {
    light: '#f1e7db',
    dark: '#192227',
    prim: '#009edc',
    primdark: '#89ddff',
    second: '#a99281',
    seconds: {
      50: '#eadcd3',
      100: '#decdc2',
      200: '#c6b2a3',
      300: '#baa696',
      400: '#b49c8b',
      500: '#a99281',
      600: '#867467',
      700: '#6f6257',
      800: '#50453d',
      900: '#3a322c',
    },
    secondSolid: {
      100: '#a99281',
      200: '#a99281',
      300: '#a99281',
      400: '#a99281',
      500: '#a99281',
      600: '#a99281',
    },
    pop: '#fdf6ec',
    holder: '#808680',
    // holder: 'rgb(135 135 135 / 60%)',
    holderLight: '#8d948d',
  },
});

// console.log(theme.components.);
export default theme;
