import styled from 'styled-components';
import { dark, grey, white } from './utils/colors';

export const BackGround = styled.div`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 90;
`;

export const SideMenuStyled = styled.div`
  background-color: #696969;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 100%;
  left: 0;
  max-width: 100%;
  position: fixed;
  top: 0;
  width: 200px;
  z-index: 100;
`;

export const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 32px);
  justify-content: flex-start;
  padding: 16px;
`;

export const SideMenuTop = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
  width: 100%;
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Entry = styled.div`
  cursor: pointer;
  font-size: 24px;
  margin: 8px 0;
  padding: 8px;
  
  :hover {
    background-color: ${white};
    color: ${grey};
  }
`;

export const LastEntry = styled(Entry)`
  margin-top: auto;
`;