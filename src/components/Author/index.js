import { MdWork, MdWorkOutline } from 'react-icons/md';
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import Section from '@/layouts/Section';
import { getSet } from '@/_globals/sets';
import { AuthorId } from '@/_globals/envs';

function Author({ lang = 'en' }) {
  const set = getSet(AuthorId, lang);
  return (
    <Box className="author">
      <Heading
        fontWeight="normal"
        fontSize="xl"
        display="block"
        textAlign="center"
        // borderRadius="xl"
        position="relative"
        p={3}
        borderRadius="32px"
        // py={3}
        // px={4}
        m={0}
        bottom={0}
        left={0}
        right={0}
        backgroundColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
      >
        {set.welcome}
      </Heading>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-around"
        alignItems="center"
        position="relative"
        mt={[3, 4]}
      >
        <Box>
          <Heading as="h1" fontWeight="bold" fontSize="3xl" m={0}>
            {set.name}
          </Heading>
          <Text as="p" fontSize="xl">
            {set.desc}
          </Text>
        </Box>
        <Box
          className="shows-avatar"
          mt={{ base: 3, md: 0 }}
          borderRadius="full"
          border="4px solid"
          overflow="hidden"
        >
          <Image src="/images/avatar.jpg" alt="🙄" width="120px" />
        </Box>
      </Box>
      <Section title={set.worktitle} icon={<MdWorkOutline />}>
        <Text textAlign="justify">{set.workcontent}</Text>
        <Box mt={4} display="flex" justifyContent="center">
          <Button
            className="prim-btn"
            as={Link}
            href="/work"
            rightIcon={<BsBoxArrowInRight />}
          >
            {set.workbtn}
          </Button>
        </Box>
      </Section>
    </Box>
  );
}

export default Author;
