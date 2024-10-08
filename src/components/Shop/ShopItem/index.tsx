import React from 'react'
import { ShopItem } from '@/root/types'
import Link from 'next/link'
import CardUi from '../../UI/Card'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'
import { useTranslations } from 'next-intl'

const ProductPreview = ({ products }: { products: ShopItem[] }) => {
    const t = useTranslations("ShopPage.shopSection")
    return (
        <div className='w-full grid place-items-center space-y-[6dvh] overflow-hidden'>
            <h3>{t("head")}</h3>
            <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-[90%]'>
                {products.slice(0, 12).map(item =>
                    <ScaleAnimation scaleVal once key={item._id}>
                        <CardUi product={item} />
                    </ScaleAnimation>
                )}
            </div>

        </div>
    )
}

export default ProductPreview






