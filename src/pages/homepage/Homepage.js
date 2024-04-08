import React from 'react';
import Header from '../../components/layout/header/Header';
import Banner from '../../components/banner/Banner';
import Offers from '../../components/offers/Offers';
import Info from '../../components/info/Info';
import Footer from '../../components/layout/footer/Footer';

function Homepage() {
  return (
    <>
      <Header />
      <main>
        <Banner 
          title='Discover the vast expanses of '
          titleEmphasis='space'
          text='Where the possibilities are '
          textEmphasis='endless!'
        />
        <Offers />
        <Info 
          title='Embark on a space journey' 
          text='Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.'
          moreText='The dream of space tourism is no longer confined to science fiction. With visionary companies like SpaceX, Blue Origin, and Virgin Galactic pushing the boundaries, we’re witnessing the dawn of a new era in travel and exploration. As we embark on this remarkable journey, let us prioritize safety, sustainability, and responsible practices to ensure that space tourism becomes an extraordinary and inclusive adventure for all who dare to reach for the stars.'      
        />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;