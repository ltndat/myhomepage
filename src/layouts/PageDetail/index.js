import React from 'react';
import { Box, Container, Heading, Text, Icon } from '@chakra-ui/react';
import { GrArticle } from 'react-icons/gr';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';
import Section from '@/layouts/Section';
import Footer from '@/components/Footer';
import DetailInfo from '@/components/DetailInfo';
import PreviewInfo from '@/components/PreviewInfo';
import { detailId, detailProjectType, workId } from '@/_globals/envs';
import BlueBreadcrumb from '@/components/BlueBreadcrumb';
import icons from '@/_globals/icons';

function PageDetail({ lang = 'en', type = detailProjectType, detail: item }) {
  const set = getSet(detailId, lang);
  const setWork = getSet(workId, lang);

  const breads = [
    { name: setWork.name, href: '/work', icon: icons.work.Icon },
    {
      name: setWork?.[type].title,
      href: `/work#${type}`,
      icon: icons.work?.[type]?.Icon,
    },
    { name: item.name, href: '#', icon: icons.detail.Icon },
  ];

  return (
    <>
      <SEO
        lang={lang}
        title={`${set.title} ${setWork?.[type].title} - ${item.name}`}
      />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        p={6}
        // overflow="hidden"
      >
        {/* <BlueBreadcrumb ref={refBread} breads={breads} /> */}
        <BlueBreadcrumb breads={breads} />
        <Box as="article" title={item.name} id={item.id} mt={4}>
          <Box
            id="thumbnail"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            // overflow="hidden"
          >
            <Heading
              // backgroundColor={useColorModeValue('second', 'seconddark')}
              py={2}
              px={5}
              // borderRadius="32px 32px 0 0"
              borderRadius="32px"
              textAlign="center"
              // textAlign="right"
              fontSize={['2xl', '3xl']}
              fontFamily="handwrite"
              display="block"
              mb={4}
            >
              {item.name}
            </Heading>
            <Box
              w="100%"
              h="100%"
              pt={1}
              backgroundColor="second"
              borderRadius="32px 32px 2px 2px"
            >
              <Box display="flex" justifyContent="center">
                <Icon
                  className="animate__animated animate__flip animate__infinite animate__slow"
                  as={GrArticle}
                  boxSize="24px"
                />
              </Box>
              <Box
                minH={['200px', '320px', '400px']}
                w="100%"
                backgroundColor="holder"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundImage={item.thumbnail}
              />
            </Box>
          </Box>
          <Section title={set.desc} id="desc" sep={4}>
            <Text textAlign="justify">{item.desc}</Text>
          </Section>
          <Section title={set.detail} id="detail" sep={4}>
            <DetailInfo data={item.info} mt={2} />
          </Section>
          <Section title={set.preview} id="preview" sep={4}>
            <PreviewInfo data={item.preview} />
          </Section>
        </Box>
        <Footer />
      </Container>
    </>
  );
}

export default PageDetail;
