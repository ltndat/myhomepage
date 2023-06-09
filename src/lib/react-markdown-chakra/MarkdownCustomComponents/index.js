import {
  Button,
  Code,
  Text,
  useColorModeValue,
  Icon,
  Box,
  Heading,
  Divider,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { VscCopy } from 'react-icons/vsc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialLight,
  materialDark,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Link } from '@/lib/next';
import { Section } from '@/layouts';

/** @param {import('@chakra-ui/react').DividerProps} props */
function CustomDivider(props) {
  const { node, ...restProps } = props;
  return (
    <Divider
      mt={2}
      {...restProps}
      borderColor={useColorModeValue('blackAlpha.200')}
    />
  );
}

function CustomHeading(props) {
  const { node, as = 'h2', ...restProps } = props;
  return <Heading as={as} {...restProps} />;
}

function CustomText(props) {
  const { node, ...restProps } = props;
  return <Text mb={2} textAlign="justify" {...restProps} />;
}

function CustomLi({ node, ordered, ...restProps }) {
  ordered = ordered === false ? undefined : ordered;
  return (
    <li
      style={{
        textAlign: 'justify',
      }}
      // eslint-disable-next-line react/no-unknown-property
      ordered={ordered}
      {...restProps}
    />
  );
}

function CustomBlockQuote(props) {
  const { node, ...restProps } = props;
  return (
    <Code
      as="blockquote"
      className="custom-blockquote"
      colorScheme="gray"
      backgroundColor={useColorModeValue('gray.600', 'whiteAlpha.200')}
      borderRadius="0 24px 24px 0"
      borderLeft="4px solid"
      borderColor={useColorModeValue('second', '')}
      color={useColorModeValue('whiteAlpha.800', '')}
      py={4}
      px={6}
      mt={2}
      {...restProps}
    />
  );
}

function CustomCode({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || '');
  const sheme = useColorModeValue('seconds', 'twitter');
  const theme = useColorModeValue(materialLight, materialDark);
  const bgCustomValue = useColorModeValue(
    'var(--chakra-colors-pop)',
    'var(--chakra-colors-whiteAlpha-200)',
  );

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children);
  }, [children]);

  return !inline && match ? (
    <Box pos="relative">
      <Button
        onClick={handleCopy}
        variant="solid"
        pos="absolute"
        zIndex={1}
        right="2px"
        top="2px"
        borderTopRightRadius="24px"
      >
        <Icon as={VscCopy} />
      </Button>
      <SyntaxHighlighter
        className="pre-code"
        style={theme}
        customStyle={{
          borderRadius: '24px',
          padding:
            'var(--chakra-space-4) var(--chakra-space-6) var(--chakra-space-4) var(--chakra-space-6)',
          background: bgCustomValue,
          border: '2px solid',
        }}
        language={match[1]}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </Box>
  ) : (
    <Code
      className={className}
      colorScheme={sheme}
      border="1px dashed"
      {...props}
    >
      {children}
    </Code>
  );
}

/** @type {import('react-markdown').Components} */
const MarkdownCustomComponents = {
  h1: (props) => <CustomHeading as="h1" size="2xl" my={6} {...props} />,
  h2: (props) => <CustomHeading as="h2" size="xl" my={5} {...props} />,
  h3: (props) => <CustomHeading as="h3" size="lg" my={4} {...props} />,
  h4: (props) => <CustomHeading as="h4" size="md" my={3} {...props} />,
  h5: (props) => <CustomHeading as="h5" size="sm" my={2} {...props} />,
  h6: (props) => <CustomHeading as="h6" size="xs" my={1} {...props} />,
  p: CustomText,
  code: CustomCode,
  blockquote: CustomBlockQuote,
  li: CustomLi,
  hr: CustomDivider,
  script: React.Fragment,
  section: (props) => <Section title={props.children} />,
  a: Link,
  // c: React.Fragment,
};

export default MarkdownCustomComponents;
