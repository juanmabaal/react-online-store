import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from "../OrderCard";
import { totalPrice } from "../../Utils";
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    console.log ('CART: ', context.cartProducts)  

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts)
    }

    return (
        
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div>
                    <XMarkIcon 
                    className='h-6 w-6 text-black'
                    onClick={() => context.closeCheckoutSideMenu()}>
                    </XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title ={product.title}
                    imageUrl = {product.images}
                    price= {product.price}
                    handleDelete={handleDelete}
                    />
                    
                ))
            }
            </div>
            <di className= 'px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </di>
        </aside>
    )
}

export default CheckoutSideMenu