import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '../../../components/Header';

export default function AuthLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
