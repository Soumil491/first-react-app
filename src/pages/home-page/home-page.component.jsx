import React from 'react';
import './home-page.component.scss';
import Directory from '../../components/directory/directory.component';
// import Navbar from '../../components/navbar/navbar.component';

const HomePage = () => {
    return (
        <div className="home-page">
            {/* <Navbar/> */}
            <Directory/>
        </div>
    )
}

export default HomePage;