import Collection from "@/src/components/Shop/othersection"
import Category from "@/src/components/Shop/ShowCategory"


const Shop = async () => {
  return (
    <main className='space-y-[5vmax] mb-7'>
        <Category />
      <Collection />
    </main>
  )
}

export default Shop

{
  /*
  import { Hero } from '@/ui/Hero'
import mainImg from "@/public/images/Shop/hero.jpg"
import bgImage from "@/public/images/Shop/heroBg.jpg"
import { getTranslations } from 'next-intl/server'
import ProductPreview from '@/src/components/Shop/ShopItem'
import Category from '@/src/components/Shop/ShowCategory'
import getShopItems from '@/src/lib/getShopItems'

  const t=await getTranslations("ShopPage.Hero")
  const products = await getShopItems()


        <Hero
        img={mainImg}
        bgImage={bgImage}
        title={t("title1")}
        title2={t("title2")}
        desc={t("title3")} />
        
      <ProductPreview products={products} />
  */
}