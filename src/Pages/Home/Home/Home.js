import React from 'react';
import HomePageProduct from "../HeaderProduct/HomePageProduct";
import TagLine from "../HomeTagLine/TagLine";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import NewsLetter from "../NewsLetter/NewsLetter";
import ProductsPage from "../Products/ProductsPage";
import About from "../About/About";
import UpperFooter from "../Footer/Footer/Footer";

const Home = () => {
    return (
        <div>
            <TagLine/>
            <HomePageProduct/>
            <FeatureProducts/>
            <NewsLetter/>
            <ProductsPage/>
            <About/>
            <UpperFooter/>
        </div>
    );
};

export default Home;
