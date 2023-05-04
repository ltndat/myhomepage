import React from 'react';
import { Box, Heading, Text, useColorModeValue, Icon } from '@chakra-ui/react';
import { GiNewspaper } from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io';
import MotionButton from '../MotionChakra/MotionButton';
import Section from '@/layouts/Section';

function ArticleHeader({ toc, set, data, ...props }) {
  return (
    <Box
      as="header"
      className="article-header"
      backgroundColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
      borderRadius="12px"
      overflow="hidden"
      p={2}
      {...props}
    >
      <Box
        className="article-body"
        display="flex"
        minH={['', '460px']}
        flexDirection={['column', 'row']}
      >
        <Box
          className="header-heading"
          width={['100%', '40%']}
          height={['40%', '100%']}
          minH={['200px', '460px']}
          backgroundColor="second"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box display="flex" justifyContent="center" borderRadius="12px">
            <Icon
              className="animate__animated animate__flip animate__infinite animate__slow"
              as={GiNewspaper}
              boxSize="56px"
              backgroundColor={useColorModeValue(
                'blackAlpha.300',
                'whiteAlpha.400',
              )}
              px={2}
              borderRadius="full"
            />
          </Box>
          <Heading fontSize="3xl" mt={4}>
            {data.title}
          </Heading>
          <Text mt={2}>{data.desc}</Text>
          {/* <Card
              height="160px"
              maxW="320px"
              w="100%"
              img={data.thumbnail}
              filter="brightness(0.5)"
              mt={4}
            /> */}
        </Box>
        <Box
          width={['100%', '60%']}
          height={['60%', '100%']}
          minH={['280px', '460px']}
          className="header-content"
          // backgroundColor={useColorModeValue('gray', 'gray')}
          backgroundColor={useColorModeValue('holder', 'holder')}
          color={useColorModeValue('black')}
          py={2}
          px={4}
          overflowY="scroll"
          // w="100%"
          // h="100%"
          {...props}
        >
          <Section
            title={set.tablet}
            mt={2}
            titleProps={{ fontFamily: 'handwrite', fontWeight: 'extrabold' }}
            sep={6}
          >
            {data.summary}
            {toc &&
              toc.map(({ id, text, offsetTop }) => (
                <MotionButton
                  key={id}
                  display="flex"
                  alignItems="center"
                  justifyContent="start"
                  width="100%"
                  variant="unstyled"
                  // onClick={() => router.push(`#${id}`)}
                  onClick={() =>
                    window.scrollTo({
                      behavior: 'smooth',
                      top: offsetTop,
                    })
                  }
                  leftIcon={<IoIosArrowForward />}
                  h="auto"
                  mt={1}
                  minW="24px"
                  minH="24px"
                >
                  <Text
                    title={text}
                    overflow="clip"
                    textOverflow="ellipsis"
                    fontSize="lg"
                  >
                    {text}
                  </Text>
                </MotionButton>
              ))}
          </Section>
        </Box>
      </Box>
      {/* <Box pos="relative" className="article-thumbnail" mt={1}> */}
      {/* <PreviewInfo data={data.images} /> */}
      {/* <BallGallery data={data.images} /> */}
      {/* </Box> */}
    </Box>
  );
}

export default ArticleHeader;
