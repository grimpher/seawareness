import styled, { css } from 'styled-components/native';

import { colors } from '../styles';

export const ScreenHeadingSubtitle = styled.Text`
  font-size: 18px;
  line-height: 28px;
  margin-top: 50px;
`;

const Paragraph = styled.Text<{ isError?: boolean; marginTop?: number; marginBottom?: number }>`
  font-size: 18px;
  line-height: 28px;

  ${({ isError }) =>
    isError &&
    css`
      color: ${colors.errorParagraph};
    `}

  ${({ marginTop }) =>
    css`
      margin-top: ${marginTop + 'px'};
    `}
  ${({ marginBottom }) =>
    css`
      margin-bottom: ${marginBottom + 'px'};
    `}
`;
Paragraph.defaultProps = {
  marginTop: 0,
  marginBottom: 0
};

export { Paragraph };
