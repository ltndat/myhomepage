import Link from 'next/link';
import React, { useCallback, useEffect, useRef } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Icon } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';

function $Breadcrumb({ breads = [], ...props }) {
  const lastBreadIndex = breads.length - 1;
  const refBread = useRef();

  const handleWindowResize = useCallback(() => {
    const { current: breadEl } = refBread;
    if (!breadEl) return;
    breadEl.scrollLeft = breadEl.offsetWidth;
  }, []);

  useEffect(() => handleWindowResize(), [handleWindowResize]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <Breadcrumb
      separator={<IoIosArrowForward color="gray.500" />}
      overflowX="scroll"
      className="breadcrumb"
      ref={refBread}
      {...props}
    >
      {breads.map(({ name, href, icon }, index) =>
        index !== lastBreadIndex ? (
          <BreadcrumbItem key={name}>
            <Button
              as={Link}
              href={href}
              leftIcon={icon && <Icon as={icon} boxSize="18px" />}
            >
              {name}
            </Button>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={name} isCurrentPage>
            <Button
              as={Link}
              href={href}
              // className="second-btn"
              backgroundColor="second"
              borderRadius="3xl"
              leftIcon={icon && <Icon as={icon} boxSize="18px" />}
            >
              {name}
            </Button>
          </BreadcrumbItem>
        ),
      )}
    </Breadcrumb>
  );
}

export default $Breadcrumb;
