import {Outlet} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';

const MainLayout = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Banner></Banner>
        </div>
    );
};

export default MainLayout;