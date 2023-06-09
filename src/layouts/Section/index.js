import React from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

function Section({
  title,
  children,
  icon,
  sep = 8,
  titleProps,
  contentProps,
  ...props
}) {
  return (
    <Box className="section" as="section" mt={6} {...props}>
      <Box className="section-title">
        <Heading
          as="h3"
          display="inline-flex"
          alignItems="center"
          fontSize="2xl"
          fontWeight="normal"
          pos="relative"
          // backgroundColor="blackAlpha.200"
          // p={2}
          _after={{
            content: '""',
            display: 'block',
            pos: 'absolute',
            height: `${sep}px`,
            backgroundColor: useColorModeValue(
              'gray.700',
              // 'currentColor',
              'currentColor',
            ),
            borderRadius: '2px',
            width: '100%',
            bottom: '-12px',
            // filter: 'contrast(0.5)',
          }}
          {...titleProps}
        >
          <Box mr={2}>{title}</Box>
          {icon}
        </Heading>
      </Box>
      <Box
        className="section-content"
        mt={6}
        textAlign="justify"
        {...contentProps}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Section;
