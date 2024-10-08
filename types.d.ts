import { AuthInput } from '@/types';
import { StaticImageData } from 'next/image';
export interface ShopItem {
  _id: string,
  name: string,
  category: string,
  price: string,
  shortDescription: string,
  description: string,
  attachmentFile: string|StaticImageData,
  createdAt: string,
  updatedAt: string,
  __v: number
}
export interface CartItem extends ShopItem {
  count: number
}

export interface clinicAndSheltersData {
  _id: string,
  name: string,
  address:string,
  phone:string,
  doctorName:string,
  shortDescription: string,
  doctorDescription: string,
  attachmentFile: string|StaticImageData,
  createdAt: string,
  updatedAt: string,
  __v: number
}

export interface AuthInputType {
  key: string,
  type: string,
  icon: React.ReactNode,
  err: string | undefined
  registerVal: "email" | "password" | "name",
  placeholder?:string
}
