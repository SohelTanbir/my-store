import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';

import LatestNews from '../LatestNews/LatestNews';
import Product from '../Product/Product';
import SearchBox from '../SearchBox/SearchBox';
import Service from '../Service/Service';


const Home = ()=> {
    return (
        <div className="home">
            <SearchBox/>
            <Banner/>
            <Service/>
            <Product/>
            <LatestNews/>
            {/* <Blog/> */}
            <Footer/>
        </div>
    )
}

export default Home;