import Link from 'next/link';
import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Card from '../Card';

function ThumbnailShows({ baseUrl, data, ...props }) {
  return (
    <SimpleGrid
      columns={[1, 2, 3]}
      mt={4}
      spacingX={[0, 4]}
      spacingY={4}
      {...props}
    >
      {data.map(
        (i) =>
          !data?.delete && (
            <Card
              key={i.id}
              as={Link}
              w="100%"
              title={i?.name || i?.title}
              href={i?.url || i?.href || `${baseUrl}/${i.id}`}
              img={i.thumbnail}
              border={i?.thumbnailHighContrast && '2px solid'}
            />
          ),
      )}
    </SimpleGrid>
  );
}

export default ThumbnailShows;
