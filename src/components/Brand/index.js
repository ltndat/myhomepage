import Link from 'next/link';
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { BackgroundImage } from '@/lib/next-chakra';

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  heading: {
    letterSpacing: '4px',
    fontWeight: 'semibold',
  },
  img: {
    borderRadius: '50%',
    width: '44px',
  },
};

/** @param {import('@chakra-ui/react').BoxProps} props */
function Brand(props) {
  const { title = 'ltndat', ...restProps } = props;
  // const { title = 'Blue', ...restProps } = props;

  return (
    <Box
      // id="brand"
      key="brand"
      className="brand"
      as={Link}
      href="/"
      display="flex"
      alignItems="center"
      tabIndex={-1}
      {...restProps}
    >
      <BackgroundImage src="/beard.png" />
      {/* <Heading fontFamily="deco" fontSize="3xl" ml={2} style={style.heading}> */}
      {/* <Icon className="brand-icon" as={IoFootball} boxSize="24px" mr={1} /> */}
      <Heading ml={1} fontFamily="deco" fontSize="3xl" style={style.heading}>
        {title}
      </Heading>
    </Box>
  );
}

export default Brand;
