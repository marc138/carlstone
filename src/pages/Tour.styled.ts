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
  padding: 8px 0;
  width: 100%
`;

export const Entry = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  padding: 10px 0;
  :hover {
    background-color: ${white};
    color: ${grey};
  }
`;

export const DateField = styled.div`
  flex-basis: 50px;
  flex-grow: 1;
`;

export const HeadingField = styled.div`
  flex-basis: 200px;
  flex-grow: 6;
`;

export const DescriptionField = styled.div`
  flex-basis: 200px;
  flex-grow: 6;
`;

export const Line = styled.hr`
  border-top: 1px solid ${white};
  margin: 0;
`;