import styled from 'styled-components';
import { whiteBox } from '../App.styled';
import {grey, white } from '../utils/colors';

export const ContactStyled = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const ContactWrapper = styled.div`
  max-width: 80vh;
`;

export const ImpressumStyled = styled.div`
  ${whiteBox}
  margin-top: 16px;
`;

export const ImpressumHead = styled.div`
  cursor: pointer;
  padding: 16px;
  
  :hover {
    background-color: ${white};
    color: ${grey};
  }
`;

export const ImpressumBody = styled.div`
  padding-inline: 16px;
`;