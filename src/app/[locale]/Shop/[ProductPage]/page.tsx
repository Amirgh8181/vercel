import ShopItemSinglePageContainer from '@/src/components/ShopItemSinglePage';
import getSingleShopItem from '@/src/lib/getSingleShopItem';

export default async function ProductPage  ({ params }: { params: { ProductPage: string } })  {    
    const req = await getSingleShopItem(params.ProductPage)
    return (
        <>
            <ShopItemSinglePageContainer product={req} />
        </>
    )
}


