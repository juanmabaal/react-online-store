import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'


const Card = (data) => {
const context = useContext(ShoppingCartContext);

const showProduct= (ProductDetail)=> {
    context.openProductDetail();;
    context.setProductToShow(ProductDetail);
    context.closeCheckoutSideMenu();
}

const addProductsToCart  = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu()
    context.closeProductDetail() 
}
const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id ).length > 0;
    if (isInCart) {
        return (
            <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-1 font-bold p-1'>
                <CheckIcon className='h-6 w-6 text-white'>
                </CheckIcon>
            </div>
        )
    }else {
        return (
            <div className='absolute top-0 right-0 flex justify-center items-center bg-green-600 w-6 h-6 rounded-full m-1 font-bold p-1' onClick={(event)=> addProductsToCart(event, data.data)}>
                <PlusIcon className='h-6 w-6 text-black'>
                </PlusIcon>
            </div>
        )
    }
}

    return (
        <div 
        className='bg-white cursor-pointer w-45 h-55 rounded-lg border border-gray-300 border-line p-1'
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-green-600 px-1 bg-opacity-50 rounded-lg font-semibold text-black text-xs m-1 py-0.5'>{data.data.category.name}</span>
                <img src= {data.data.images[0]}/* 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn00931/l/164.jpg' */ className="w-full h-full
                object-cover rounded-lg" alt={data.data.title}/>
              {renderIcon(data.data.id)}  
            </figure>
            <p className='flex justify-between mt-0'>
                <span className='text-xs leading-3 font-light text-justify' >{data.data.title}</span>
            </p>
            <span className='text-sm mt-8 font-medium text-red-700'>${data.data.price}</span>
        </div>
    )
}

export default Card