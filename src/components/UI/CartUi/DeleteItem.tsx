"use client"
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'
import { useLocale } from 'next-intl'
import { IoMdClose } from 'react-icons/io'

const DeleteItem = ({ id }: { id: string }) => {
    const { setDeleteItem } = useCartItems()
    const local = useLocale()
    return (
        <span onClick={() => setDeleteItem(id)}
            className={`group md:text-3xl text-2xl  cursor-pointer absolute top-2 ${local === "fa" ? 'left-2' : 'right-2'}`}>
            <IoMdClose className='group-hover:text-red-500 group-hover:rotate-90 transition-all duration-400' />
        </span>
    )
}

export default DeleteItem