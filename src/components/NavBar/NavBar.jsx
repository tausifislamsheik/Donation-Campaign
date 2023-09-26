import {NavLink} from 'react-router-dom';
import Logo from './Logo';

const NavBar = () => {
    
    return (
        <div>
            <nav className='md:flex justify-between items-center pt-6 '>
                <Logo></Logo>
                <ul className='md:flex gap-8'>
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