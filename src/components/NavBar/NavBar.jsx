import {NavLink} from 'react-router-dom';
import Logo from './Logo';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav className='flex justify-between items-center py-6 '>
                <Logo></Logo>
                
                <ul className='md:flex gap-8'>
                <div className='md:hidden text-2xl  mt-8' onClick={() => setOpen(!open)}>
                    {
                        open === true ? <AiOutlineClose></AiOutlineClose> : <BiMenu></BiMenu>
                    }
                
                </div>
                    
                    <li>
                    <NavLink to="/"
                       className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""}>
                         Home
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to="/donation"
                       className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 font-semibold  underline" : ""}>
                         Donation
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to="/statistics"
                       className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 font-semibold  underline" : ""}>
                         Statistics
                    </NavLink>
                    </li>
                    
                </ul>
            </nav>

            
        </div>
    );
};

export default NavBar;