import AboutUs from '@/src/components/Home/About-US';
import ClinicPreview from '@/src/components/Home/ClinicPreview';
import HeroSection from '@/src/components/Home/Hero';
import QuestionContainer from '@/src/components/Home/QuestionPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <QuestionContainer />
      <ClinicPreview />

    </>
  );
}


{/*
import ShopPreview from '@/src/components/Home/ShopPreview';
import ClinicPreview from '@/src/components/Home/ClinicPreview';
import ShelterPreview from '@/src/components/Home/ShelterPreview';


        
      
      <ShopPreview />
      <ShelterPreview />
  */}