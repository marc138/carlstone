import styled, { css } from 'styled-components';
import {dark, grey, white } from '../utils/colors';
import Table from 'react-bootstrap/Table'

export const TourStyled = styled.div`
  height: 100%;
`;

export const TourWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
`;

export const Heading = styled.div`
  width: 100%;
  text-align: center;
`;

export const TableWrapper = styled.div`
  padding: 16px 0;
  width: 100%
`;

export const TableStyled = styled.table`
  width: 100%
`;

export const TBody = styled.table`
  border-spacing: 0;
  width: 100%
`;

export const TR = styled.tr`
  :hover {
    background-color: ${white};
    color: ${grey};
  }
`;

type TDProps = {
  isLast: boolean
}

export const TD = styled.td<TDProps>`
  ${ ({isLast}) => !isLast && css`border-bottom: 2px solid ${white};`}
  padding: 8px;
`;