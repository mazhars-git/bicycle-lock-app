import React from 'react';
import Header from '../Header/Header';
import Instruction from '../Instruction/Instruction';
import Services from '../Services/Services';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import FAQ from '../FAQ/FAQ';
import Subscription from '../Subscription/Subscription';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Instruction></Instruction>
            <Features></Features>
            <Gallery></Gallery>
            <FAQ></FAQ>
            <Subscription></Subscription>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;