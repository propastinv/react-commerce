import React, {FC, useState} from "react"
import cn from 'classnames'
import logoImage from '../assets/images/opencart-logo.png'
import cartIcon from '../assets/images/bx-cart.svg'
import { CartItem } from "../types"

const cartItems:CartItem[] = [
    {
        imagePath: 'https://landing.tanita-romario.ua/image/cache/webp/catalog/import_files/21/21161_2-1333x2000.webp',
        name: 'Комбинация 21161 Красный',
        count: 1,
        price: 340,
    }
]

const Header:FC = () => {
    const [isShowCart, setisShowCart] = useState(false)

    const total = cartItems.reduce((acc,item) =>
        acc+item.count
    , 0)

    return (
        <div className="flex items-center justify-between relative w-full py-1 px-3">
            <img src={logoImage} alt="" width='180'/>

            <button className="bg-transparent border-none" onClick={() => setisShowCart(!isShowCart)}>
                <img src={cartIcon} alt="" width='50' />
            </button>

            <div className={cn('absolute right-0 p-5 shadow-md rounded-md', {
                hidden: !isShowCart,
            })}
            style={{
                top: '59px',
            }}
            >
                {cartItems.map(item => (
                    <div className="flex items-center" key={`cart item ${item.name}`}>
                    <img src={item.imagePath} alt={item.name} width="55" height="55" className="mr-3" />
                    <div>
                        <div>{item.name}</div>
                        <div>{`${item.count} x ${item.price}`}</div>
                    </div>
                </div>
                ))}
                

                <div className="text-lg">
                    Total: <b>{total}</b>
                </div>
            </div>
        </div>
    )
}

export default Header