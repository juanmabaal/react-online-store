import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

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
                    <NavLink to = '/'
                    className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/supplements'
                    className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Suplementos
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/herbs-homeopathy'
                    className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Hierbas y Homeopatía
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/beauty'
                    className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Belleza
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/sports'
                        className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Nutrición Deportiva
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/otros'
                        className={({ isActive }) => isActive ? activeStyle : undefined    
                    }>
                        Otros
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
                <li>
                    🛒{context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
