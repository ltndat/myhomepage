import React from 'react';
import BackgroundImage from '../BackgroundImage';
import envs from './envs';

/** @param {import('@chakra-ui/react').BoxProps} props */
function MadeBy(props) {
  return <BackgroundImage src={envs.madebyUrl} {...props} />;
}

export default MadeBy;