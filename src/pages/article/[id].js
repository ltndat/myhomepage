import React, { useRef } from 'react';
import { Box, Container } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import remarkGfm from 'remark-gfm';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { getArticleByLang } from '@/_globals/db';
import { articleId } from '@/_globals/envs';
import SEO from '@/layouts/SEO';
import Footer from '@/components/Footer';
import BlueBreadcrumb from '@/components/BlueBreadcrumb';
import { getSet } from '@/_globals/sets';
import ArticleHeader from '@/components/ArticleHeader';
import useToc from '@/features/hooks/useTOC';

function ArticlePage({ item, page, type, storage, markdown }) {
  const { lang } = storage.current;
  const refContent = useRef();
  const toc = useToc(refContent, [markdown]);

  if (!page || !type || !item || !markdown) return <E404 />;

  const set = getSet(articleId, lang);
  const setPage = getSet(page, lang);

  const breads = [
    { name: setPage.name, href: `/${page}` },
    { name: set.types[type].title, href: `/${page}?type=${type}` },
    { name: item.title, href: '#' },
  ];

  return (
    <>
      <SEO lang={lang} title={`${set.title} - ${item.title}`} />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        // pos="relative"
        // overflow="hidden"
        px={6}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={4}
        >
          <BlueBreadcrumb breads={breads} flex={1} />
          {/* <Button
            ml={2}
            borderRadius="lg"
            w="48px"
            h="48px"
            right={0}
            bottom={0}
            onClick={handlePrev}
            boxShadow="base"
            backgroundColor={useColorModeValue('black', 'white')}
            color={useColorModeValue('white', 'black')}
          >
            <BsBoxArrowLeft />
            <Icon as={BsBoxArrowLeft} boxSize="24px" />
          </Button> */}
        </Box>
        <Box as="article" className="article">
          <ArticleHeader toc={toc} set={set} data={item} />
          <Box ref={refContent} className="article-content">
            <ReactMarkdown
              skipHtml
              remarkPlugins={[remarkGfm]}
              components={{
                ...ChakraUIRenderer(),
                // code: ChakraCode,
              }}
            >
              {markdown}
            </ReactMarkdown>
          </Box>
        </Box>
        <Footer lang={lang} />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  const storage = createFeaturesStorage(context);
  const id = context.query.id || '';
  let item = null;
  let markdown = null;

  try {
    const data = getArticleByLang(storage.current.lang);
    item = data.find((i) => i.id === id) || null;
    const res = await fetch(item.markdown);
    markdown = (await res.text()) || null;
  } catch (error) {
    /* empty */
  }

  return {
    props: {
      item,
      markdown,
      ...context.query,
      storage,
    },
  };
}

export default ArticlePage;
