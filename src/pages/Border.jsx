import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Border = () => {
  return <div css={theme => ({ color: theme.color.primary.main })}>some other text</div>;
};

export default Border;
