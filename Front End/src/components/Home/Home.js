import React, { Fragment } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import LatestNews from '../LatestNews/LatestNews';
import Product from '../Product/Product';
import SearchBox from '../SearchBox/SearchBox';
import Service from '../Service/Service';


const Home = ()=> {
    return (
        <Fragment>
            <Header/>
            <div className="home">
                <SearchBox/>
                <Banner/>
                <Service/>
                <Product/>
                <LatestNews/>
                {/* <Blog/> */}
                <Footer/>
            </div>
        </Fragment>
    )
}

export default Home;