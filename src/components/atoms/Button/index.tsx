/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import useTheme from '../../../utils/useTheme';
import mediaQuery from '../../../styles/mediaQuery';

interface Props {}

const Button: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <button
      css={css`
        background-color: ${theme.color.primary.main};
        ${mediaQuery(0)} {
          color: gray;
        }
      `}
    >
      button
    </button>
  );
};

export default Button;
