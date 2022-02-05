import styled, { css } from 'styled-components';
import {dark, grey, white } from '../utils/colors';
import Table from 'react-bootstrap/Table'

export const TourStyled = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TableWrapper = styled.div`
  padding: 16px 0;
`;

export const TableStyled = styled.table`
`;

export const TBody = styled.table`
  border-spacing: 0;
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