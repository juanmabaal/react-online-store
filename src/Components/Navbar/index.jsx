import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
const context = useContext(ShoppingCartContext);
const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-6 text-sm font-light'>
            <ul className='flex items-center gap-4'>
                <li className='font-semibold text-lg'>
                    <NavLink to = '/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/'
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/clothes'
                    onClick={() => context.setSearchByCategory('clothes')}
                    className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/furnitures'
                    onClick={() => context.setSearchByCategory('furnitures')}
                    className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/shoes'
                        onClick={() => context.setSearchByCategory('shoes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-4'>
                <li className='text-black/60'>
                    juanma.baal@gmail.com
                </li>
                <li>
                    <NavLink to = '/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
