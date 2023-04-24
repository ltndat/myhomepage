import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { collabs } from '@/_globals/db';
// import data from './data';

function CollabShows({ lang = 'en', ...props }) {
  return (
    <Wrap className="project-shows" {...props}>
      {collabs.map((i) => (
        <WrapItem key={i.name}>
          <Avatar name={i.name} title={i.name} src={i.thumbnail} />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default CollabShows;
