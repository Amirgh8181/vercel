import { Hero } from '@/ui/Hero'
import mainImg from "@/public/images/Clinics/hero-pic.jpg"
import bgImage from "@/public/images/Clinics/hero bg.jpg"
import { getTranslations } from 'next-intl/server';
import getClinics from '@/src/lib/getClinics';

const Clinics = async () => {
    const t = await getTranslations("Clinic")
    return (
        <>
            <Hero
                img={mainImg}
                bgImage={bgImage}
                title={t("Hero.title")}
                desc={t("Hero.description")}
            />

        </>
    )
}

export default Clinics

{/*
import ClinicAndShelterCard from '@/src/components/UI/clinicAndShelterCard'



                <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard href='/Clinics/' data={req} headerText={t("Card.head")} />
            </div>
    */}