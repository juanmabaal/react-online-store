import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import './style.css'
import SignIn from "../../Pages/SignIn";

const Navbar = () => {
const context = useContext(ShoppingCartContext);
const activeStyle = 'underline underline-offset-4'

//Sign Out
const signOut = localStorage.getItem('sign-out')
const parsedSignOut = JSON.parse(signOut)
const isUserSignOut = context.signOut || parsedSignOut

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  //Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
}

    const renderView = () => {

        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
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
                        }
                    onClick={() => handleSignOut()}>
                            Sign Out
                </NavLink>
            </li>
            </>
            )
        } else {
            return (
            
                <li>
                    <NavLink to = '/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined }
                        onClick={() => handleSignOut()}>
                        Sign In
                    </NavLink>
                </li>
            )
        }
    }

    return (
        <nav className="custom-navbar flex justify-between items-center fixed z-10 top-0 w-full py-5 px-6 text-base font-light  h-20 p-4 shadow-md border-solid border-gray-500">
            <div className='container mx-auto flex items-center justify-between'>    
                <ul className='flex items-center gap-4'>
                    <li className='font-semibold text-lg'>
                        <NavLink to ={`${isUserSignOut? '/sign-in' : '/'}`}>
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
                        to = '/furniture'
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) => isActive ? activeStyle : undefined    
                        }>
                            Furniture
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to = '/shoes'
                            onClick={() => context.setSearchByCategory('shoes')}
                            className={({ isActive }) => isActive ? activeStyle : undefined    
                        }>
                            Shoes
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
                    {renderView()}
                    <li className='flex items-center'>
                        <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                        <div>{context.cartProducts.length}</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
