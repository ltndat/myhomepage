import React from 'react';
import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

export const constants = {
  height: 48,
  logoHeight: 40,
};

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  btn: {
    width: 40,
    height: 40,
  },
};

function ThemeButton(props) {
  const { toggleColorMode } = useColorMode();
  return (
    <Box display="flex" alignItems="center" {...props}>
      <Button
        as={motion.button}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        key={useColorModeValue('light', 'dark')}
        transition={{ duration: 0.2 }}
        className="theme-btn"
        bg={useColorModeValue('purple.500', 'yellow.500')}
        onClick={toggleColorMode}
        borderRadius="xl"
        p={2}
        style={style.btn}
      >
        {useColorModeValue(<BsMoonFill />, <BsSunFill />)}
      </Button>
    </Box>
  );
}

export default ThemeButton;
