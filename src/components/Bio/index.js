import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { BiObjectsHorizontalCenter } from 'react-icons/bi';
import { IoShareSocialOutline } from 'react-icons/io5';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import Section from '@/layouts/Section';
import data from './data';
// import sets from './sets';
import { getSet } from '@/_globals/sets';

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  btn: {
    // color: 'var(--primary-color)',
    // backgroundColor: 'transparent',
  },
};

function Bio({ lang = 'en' }) {
  const set = getSet(Bio.name, lang);
  return (
    <>
      <Section title={set.bio.title} icon={<BiObjectsHorizontalCenter />}>
        {set.bio.content.map(([year, desc]) => (
          <Box key={year} display="flex" mt={1}>
            <Text fontWeight="bold" mr={4}>
              {year}
            </Text>
            <Text textAlign="justify">{desc}</Text>
          </Box>
        ))}
      </Section>
      <Section title={set.love.title} icon={<AiOutlineHeart />}>
        <Text textAlign="justify">{set.love.content}</Text>
      </Section>
      <Section title={set.social.title} icon={<IoShareSocialOutline />}>
        {data.map((i) => (
          <Box key={i.name}>
            <Button
              className="prim-btn-outline"
              as={Link}
              title={i.name}
              href={i.href}
              leftIcon={i.icon}
              target="_blank"
              style={style.btn}
              mt={2}
            >
              {i.username}
            </Button>
          </Box>
        ))}
      </Section>
    </>
  );
}

export default Bio;
