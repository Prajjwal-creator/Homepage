import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import './App.css';

const App = () => (
    <div>
        <Header />
        <Hero />
        <FeaturedArticles />
        <FeaturedTutorials />
        <Footer />
    </div>
);

export default App;
