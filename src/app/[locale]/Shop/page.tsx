import Collection from "@/src/components/Shop/othersection"
import Category from "@/src/components/Shop/ShowCategory"
import mainImg from "@/public/images/Shop/hero.jpg"
import bgImage from "@/public/images/Shop/heroBg.jpg"
import { Hero } from '@/ui/Hero'

const Shop = async () => {
  return (
    <main className='space-y-[5vmax] mb-7'>
      <Hero
        img={mainImg}
        bgImage={bgImage}
        title={"title1"}
        title2={"title2"}
        desc={"title3"} />
      <Category />
      <Collection />
    </main>
  )
}

export default Shop

{
  /*

import { getTranslations } from 'next-intl/server'
import ProductPreview from '@/src/components/Shop/ShopItem'
import Category from '@/src/components/Shop/ShowCategory'
import getShopItems from '@/src/lib/getShopItems'

  const t=await getTranslations("ShopPage.Hero")
  const products = await getShopItems()



        
      <ProductPreview products={products} />
  */
}