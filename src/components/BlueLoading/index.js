import React, { useEffect } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { BackgroundImage } from '@/lib/next-chakra';
import BlueBrand from '../Blue/BlueBrand';
import MadeBy from '../MadeBy';
import envs from '../Blue/envs';
import { isClientSide } from '@/globals/envs';

const handlePreventDefault =
  /** @param {Event} e */
  (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

if (isClientSide) {
  document.addEventListener('scroll', handlePreventDefault, {
    passive: false,
  });
  document.addEventListener('touchmove', handlePreventDefault, {
    passive: false,
  });
  document.addEventListener('wheel', handlePreventDefault, {
    passive: false,
  });
  document.addEventListener('keydown', handlePreventDefault, {
    passive: false,
  });
  document.addEventListener('click', handlePreventDefault, {
    passive: false,
  });
}

function BlueLoading() {
  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('scroll', handlePreventDefault);
      document.removeEventListener('touchmove', handlePreventDefault);
      document.removeEventListener('wheel', handlePreventDefault);
      document.removeEventListener('keydown', handlePreventDefault);
      document.removeEventListener('click', handlePreventDefault);
    };
  }, []);

  return (
    <Box
      id="blue-loading"
      zIndex="10001"
      pos="fixed"
      left="-120px"
      right="-120px"
      top="-120px"
      bottom="-120px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundColor={useColorModeValue('light', 'dark')}
      userSelect="none"
    >
      <BackgroundImage w="80px" h="80px" src={envs.url} />
      <Box
        left={0}
        right={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pos="absolute"
        bottom={[4, 8]}
        flexDir="column"
        mb="120px"
      >
        <BlueBrand ml={1} w={['66px', '72px']} mb={-3} />
        <MadeBy ml={2} w="108px" />
      </Box>
    </Box>
  );
}

export default BlueLoading;
