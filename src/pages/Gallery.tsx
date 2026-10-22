import { useState } from 'react';
import gretle from '../resources/images/gretle_2025.jpg';
import kelterfest from '../resources/images/kelterfest.jpg';
import kelterfest2 from '../resources/images/kelterfest_2.jpg';
import kelterfest3 from '../resources/images/kelterfest_3.jpg';
import maier_2023 from '../resources/images/maier_2023_1.jpg';
import maier_2024 from '../resources/images/maier_2024.jpg';
import maier_2025 from '../resources/images/maier_2025.jpg';
import sigle from '../resources/images/sigle_2024.JPG';
import zamma_2022_1 from '../resources/images/zamma_2022_1.jpg';
import zamma_2022_3 from '../resources/images/zamma_2022_3.jpg';
import zamma_2024 from '../resources/images/zamma_2024.jpg';
import hochzeit_2026 from '../resources/images/Hochzeit_2026.JPG';
import hochzeit_2026_2 from '../resources/images/hochzeit_2026_2.JPG';
import hochzeit_2026_3 from '../resources/images/Hochzeit_2026_3.JPG';
import hochzeit_2026_4 from '../resources/images/Hochzeit_2026_4.JPG';
import hochzeit_2026_5 from '../resources/images/Hochzeit_2026_5.JPG';
import hochzeit_2026_6 from '../resources/images/Hochzeit_2026_6.JPG';
import * as S from './Gallery.styled';

interface GalleryImage {
  src: string;
  alt: string;
  photographer?: string;
}

const images: GalleryImage[] = [
  { src: hochzeit_2026, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: hochzeit_2026_2, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: maier_2025, alt: 'Weingut Maier 2025' },
  { src: gretle, alt: 'Gretle 2025' },
  { src: hochzeit_2026_3, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: hochzeit_2026_4, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: hochzeit_2026_5, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: hochzeit_2026_6, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: zamma_2024, alt: '[zamma] Geradstetten 2024' },
  { src: maier_2024, alt: 'Weingut Maier 2024' },
  { src: sigle, alt: 'Sigle 2024' },
  { src: maier_2023, alt: 'Weingut Maier 2023' },
  { src: zamma_2022_1, alt: '[zamma] Geradstetten 2022' },
  { src: zamma_2022_3, alt: '[zamma] Geradstetten 2022' },
  { src: kelterfest, alt: 'Kelterfest Strümpfelbach 2021' },
  { src: kelterfest2, alt: 'Kelterfest Strümpfelbach 2021' },
  { src: kelterfest3, alt: 'Kelterfest Strümpfelbach 2021' },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goNext = () => setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
  const goPrev = () => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));

  return (
    <S.GalleryStyled>
      <S.GalleryContainer>
        <S.ImageGrid>
          {images.map((img, i) => (
            <S.ImageItem key={i} onClick={() => setSelectedIndex(i)}>
              <S.Thumbnail src={img.src} alt={img.alt} />
            </S.ImageItem>
          ))}
        </S.ImageGrid>
      </S.GalleryContainer>

      {selectedIndex !== null && (
        <S.Overlay onClick={() => setSelectedIndex(null)}>
          <S.Lightbox onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setSelectedIndex(null)}>×</S.CloseButton>
            <S.NavButton left onClick={goPrev}>‹</S.NavButton>
            <S.NavButton right onClick={goNext}>›</S.NavButton>
            <S.LightboxImage src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
            {images[selectedIndex].photographer && (
              <S.Photographer>
                <a href="https://www.milenasprung.com" target="_blank" rel="noopener noreferrer">
                  {images[selectedIndex].photographer}
                </a>
              </S.Photographer>
            )}
          </S.Lightbox>
        </S.Overlay>
      )}
    </S.GalleryStyled>
  );
}
