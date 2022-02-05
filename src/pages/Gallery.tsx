import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import gretle from '../resources/images/gretle_2021.jpg';
import weinberg from '../resources/images/Weinberg.jpg';
import weinberg2 from '../resources/images/Weinberg_2.jpg';
import marc2 from '../resources/images/marc_2.jpg';
import juli2 from '../resources/images/juli_2.jpg';
import hochzeit from '../resources/images/hochzeit_2021.jpg';
import straßenmusik from '../resources/images/straßenmusik_2021.jpg';
import garage from '../resources/images/Garage.jpg';
import kelterfest from '../resources/images/kelterfest.jpg';
import kelterfest2 from '../resources/images/kelterfest_2.jpg';
import kelterfest3 from '../resources/images/kelterfest_3.jpg';
import rmk from '../resources/images/rmk_2020.jpg';
import * as S from './Gallery.styled';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function Gallery() {
  return (
    <S.GalleryStyled>
      <S.GalleryContainer>
        <Carousel showArrows={true} >
          <div>
            <img src={kelterfest} alt={''}/>
            <p className="legend">Kelterfest Strümpfelbach 2021</p>
          </div>
          <div>
            <img src={kelterfest3} alt={''}/>
            <p className="legend">Kelterfest Strümpfelbach 2021</p>
          </div>
          <div>
            <img src={marc2} alt={''}/>
            <p className="legend">Kelterfest Strümpfelbach 2021</p>
          </div>
          <div>
            <img src={juli2} alt={''}/>
            <p className="legend">Kelterfest Strümpfelbach 2021</p>
          </div>
          <div>
            <img src={kelterfest2} alt={''}/>
            <p className="legend">Kelterfest Strümpfelbach 2021</p>
          </div>
          <div>
            <img src={gretle} alt={''}/>
            <p className="legend">Weißwurstfrühstück im Gretle 2021</p>
          </div>
          <div>
            <img src={straßenmusik} alt={''}/>
            <p className="legend">Straßenmusik in Plochingen 2021</p>
          </div>
          <div>
            <img src={hochzeit} alt={''}/>
          </div>
          <div>
            <img src={weinberg} alt={''}/>
            <p className="legend">Jungwinzer Ausschank 2021</p>
          </div>
          <div>
            <img src={weinberg2} alt={''}/>
            <p className="legend">Jungwinzer Ausschank 2021</p>
          </div>
          <div>
            <img src={garage} alt={''}/>
          </div>
          <div>
            <img src={rmk} alt={''}/>
            <p className="legend">Remstalkellerei 2020</p>
          </div>
        </Carousel>
      </S.GalleryContainer>
    </S.GalleryStyled>)
}