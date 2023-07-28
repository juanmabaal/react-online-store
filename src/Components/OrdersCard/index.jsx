import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";

const OrdersCard = props => {
    const context = useContext(ShoppingCartContext);
    const {totalPrice, totalProducts} = props

    return (
        <div className='flex justify-between items-center mb-3'>
            <p>
                <span>27.07.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}
export default OrdersCard