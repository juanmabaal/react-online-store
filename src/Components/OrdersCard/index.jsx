import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";

const OrdersCard = props => {
    const context = useContext(ShoppingCartContext);
    const {totalPrice, totalProducts} = props

    return (
        <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80 '>
            <p className='flex justify-between w-full text-black'>
                <div className='flex flex-col'>
                    <span className='font-light'>27.07.23</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span   className='font-medium text-2xl text-red-700'>${totalPrice}</span>
                    <ChevronRightIcon 
                    className='h-6 w-6 text-black'>
                    </ChevronRightIcon>
                </div>
            </p>
        </div>
    )
}
export default OrdersCard