import {Outlet} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


const MainLayout = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <NavBar></NavBar>
            <div className='py-20'>
              <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;