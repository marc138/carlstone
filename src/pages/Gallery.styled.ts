import styled from 'styled-components';

export const GalleryStyled = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const GalleryContainer = styled.div`
  height: calc(100% - 48px);
  margin: 24px 0;
  max-height: calc(100% - 48px);
  max-width: 1200px;
  width: 100%;
`;

export const ImageGrid = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 8px 0 16px;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;

export const ImageItem = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Thumbnail = styled.img`
  display: block;
  height: 200px;
  object-fit: cover;
  width: auto;
  min-width: 200px;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const Lightbox = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LightboxImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -10px;
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  padding: 8px;
  line-height: 1;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const NavButton = styled.button<{ left?: boolean }>`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.left ? 'left: 24px;' : 'right: 24px;'}
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 48px;
  cursor: pointer;
  padding: 8px 16px;
  line-height: 1;
  opacity: 0.6;
  transition: opacity 0.2s;
  z-index: 1001;

  &:hover {
    opacity: 1;
  }
`;

export const Photographer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: white;
  font-size: 14px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);

  a {
    color: white;
    text-decoration: underline;
    opacity: 0.9;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;