import React from 'react'
import Hero from '../components/Hero'
import Tap from '../components/Tap'
import KompaniyaHaqida from '../components/KompaniyaHaqida'
import Sharhlar from '../components/Sharhlar'
import Afzalliklar from '../components/Afzalliklar'
import MahsusTakliflar from '../components/MahsusTakliflar'
import SavolJavob from '../components/Savol-javob'
import UlarBizgaIshonishadi from '../components/UlarBizgaIshonishadi'
import Yangiliklar from '../components/Yangiliklar'
import ScrollToTopButton from '../components/ScrollToTopButton'
const Uy = () => {
  return (
    <>
      <Hero/>
      <Tap/>
      <KompaniyaHaqida/>
      <Sharhlar/>
      <Afzalliklar/>
      <MahsusTakliflar/>
      <SavolJavob/>
      <UlarBizgaIshonishadi/>
      <Yangiliklar/>
      <ScrollToTopButton/>
    </>
  )
}

export default Uy