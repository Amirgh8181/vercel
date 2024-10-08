"use client"
import { useTranslations } from 'next-intl'
import CategBtn from '../../UI/Button/CategBtn'
import { useCategType } from '@/src/stores/Category/useCategType'

const CategoryItemsType = () => {
    const categ = ["All", "Beds", "Furnitures", "Treats", "Food", "Health", "Toys"]
    const {type,setType}=useCategType()
    const t = useTranslations("ShopPage.category")   
    return (
        <div id='startCategory' className='w-full space-y-4 sm:space-y-0 py-4'>
            <div className='w-full sm:hidden flex px-2'>
                <CategBtn
                    active={type === categ[0]}
                    changeType={setType}
                    item={categ[0]}
                >
                    {t(categ[0])}
                </CategBtn>
            </div>
            <ul  className='grid grid-cols-3 sm:grid-cols-7 gap-4 px-2'>
                {categ.map(item =>
                    <li key={item} className={`${item === "All" && 'sm:flex hidden'}`}>
                        <CategBtn
                            active={type === item}
                            changeType={setType}
                            item={item}
                        >
                            {t(item)}
                        </CategBtn>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default CategoryItemsType