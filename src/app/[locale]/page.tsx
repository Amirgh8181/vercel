import AboutUs from '@/src/components/Home/About-US';
import ClinicPreview from '@/src/components/Home/ClinicPreview';
import HeroSection from '@/src/components/Home/Hero';
import QuestionContainer from '@/src/components/Home/QuestionPreview';
import ShelterPreview from '@/src/components/Home/ShelterPreview';
import ShopPreview from '@/src/components/Home/ShopPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ShopPreview />
      <QuestionContainer />
      <ClinicPreview />
      <ShelterPreview />
    </>
  );
}


{/*
import ShopPreview from '@/src/components/Home/ShopPreview';
import ClinicPreview from '@/src/components/Home/ClinicPreview';
import ShelterPreview from '@/src/components/Home/ShelterPreview';


        
      
      
      
  */}