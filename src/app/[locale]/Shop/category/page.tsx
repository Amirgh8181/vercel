import { ShopItem } from '@/root/types';
import CategoryProducts from '@/src/components/Shop/CategoryProduce';
import CategoyPageHeader from '@/src/components/Shop/CategoyPageHeader';
import getShopItems from '@/src/lib/getShopItems';

export default async function Category  () {
    const request: ShopItem[] = await getShopItems()


    return (
        <main className='space-y-[3vmax] mb-7'>
                <CategoyPageHeader />
                <CategoryProducts data={request}/>
        </main>
    )
}
