import { useState } from 'react';
import gretle from '../resources/images/gallery/thumbs/gretle_2025.jpg';
import kelterfest from '../resources/images/gallery/thumbs/kelterfest.jpg';
import kelterfest2 from '../resources/images/gallery/thumbs/kelterfest_2.jpg';
import kelterfest3 from '../resources/images/gallery/thumbs/kelterfest_3.jpg';
import maier_2023 from '../resources/images/gallery/thumbs/maier_2023_1.jpg';
import maier_2024 from '../resources/images/gallery/thumbs/maier_2024.jpg';
import maier_2025 from '../resources/images/gallery/thumbs/maier_2025.jpg';
import sigle from '../resources/images/gallery/thumbs/sigle_2024.jpg';
import zamma_2022_1 from '../resources/images/gallery/thumbs/zamma_2022_1.jpg';
import zamma_2022_3 from '../resources/images/gallery/thumbs/zamma_2022_3.jpg';
import zamma_2024 from '../resources/images/gallery/thumbs/zamma_2024.jpg';
import hochzeit_2026 from '../resources/images/gallery/thumbs/hochzeit_2026.jpg';
import hochzeit_2026_2 from '../resources/images/gallery/thumbs/hochzeit_2026_2.jpg';
import hochzeit_2026_3 from '../resources/images/gallery/thumbs/hochzeit_2026_3.jpg';
import hochzeit_2026_4 from '../resources/images/gallery/thumbs/hochzeit_2026_4.jpg';
import hochzeit_2026_5 from '../resources/images/gallery/thumbs/hochzeit_2026_5.jpg';
import hochzeit_2026_6 from '../resources/images/gallery/thumbs/hochzeit_2026_6.jpg';
import gretle_full from '../resources/images/gallery/full/gretle_2025.jpg';
import kelterfest_full from '../resources/images/gallery/full/kelterfest.jpg';
import kelterfest2_full from '../resources/images/gallery/full/kelterfest_2.jpg';
import kelterfest3_full from '../resources/images/gallery/full/kelterfest_3.jpg';
import maier_2023_full from '../resources/images/gallery/full/maier_2023_1.jpg';
import maier_2024_full from '../resources/images/gallery/full/maier_2024.jpg';
import maier_2025_full from '../resources/images/gallery/full/maier_2025.jpg';
import sigle_full from '../resources/images/gallery/full/sigle_2024.jpg';
import zamma_2022_1_full from '../resources/images/gallery/full/zamma_2022_1.jpg';
import zamma_2022_3_full from '../resources/images/gallery/full/zamma_2022_3.jpg';
import zamma_2024_full from '../resources/images/gallery/full/zamma_2024.jpg';
import hochzeit_2026_full from '../resources/images/gallery/full/hochzeit_2026.jpg';
import hochzeit_2026_2_full from '../resources/images/gallery/full/hochzeit_2026_2.jpg';
import hochzeit_2026_3_full from '../resources/images/gallery/full/hochzeit_2026_3.jpg';
import hochzeit_2026_4_full from '../resources/images/gallery/full/hochzeit_2026_4.jpg';
import hochzeit_2026_5_full from '../resources/images/gallery/full/hochzeit_2026_5.jpg';
import hochzeit_2026_6_full from '../resources/images/gallery/full/hochzeit_2026_6.jpg';
import * as S from './Gallery.styled';

interface GalleryImage {
  src: string;
  full: string;
  alt: string;
  photographer?: string;
}

const images: GalleryImage[] = [
  { src: hochzeit_2026, full: hochzeit_2026_full, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: hochzeit_2026_2, full: hochzeit_2026_2_full, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: maier_2025, full: maier_2025_full, alt: 'Weingut Maier 2025' },
  { src: gretle, full: gretle_full, alt: 'Gretle 2025' },
  { src: hochzeit_2026_3, full: hochzeit_2026_3_full, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: hochzeit_2026_4, full: hochzeit_2026_4_full, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: hochzeit_2026_5, full: hochzeit_2026_5_full, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: hochzeit_2026_6, full: hochzeit_2026_6_full, alt: 'Hochzeit 2026', photographer: 'Foto: Milena Sprung Fotografie' },
  { src: zamma_2024, full: zamma_2024_full, alt: '[zamma] Geradstetten 2024' },
  { src: maier_2024, full: maier_2024_full, alt: 'Weingut Maier 2024' },
  { src: sigle, full: sigle_full, alt: 'Sigle 2024' },
  { src: maier_2023, full: maier_2023_full, alt: 'Weingut Maier 2023' },
  { src: zamma_2022_1, full: zamma_2022_1_full, alt: '[zamma] Geradstetten 2022' },
  { src: zamma_2022_3, full: zamma_2022_3_full, alt: '[zamma] Geradstetten 2022' },
  { src: kelterfest, full: kelterfest_full, alt: 'Kelterfest Strümpfelbach 2021' },
  { src: kelterfest2, full: kelterfest2_full, alt: 'Kelterfest Strümpfelbach 2021' },
  { src: kelterfest3, full: kelterfest3_full, alt: 'Kelterfest Strümpfelbach 2021' },
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
              <S.Thumbnail
                src={img.src}
                alt={img.alt}
                loading={i < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
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
            <S.LightboxImage src={images[selectedIndex].full} alt={images[selectedIndex].alt} />
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
