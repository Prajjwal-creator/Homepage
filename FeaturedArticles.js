import React from 'react';
import './FeaturedArticles.css';

const articles = [
    { title: 'React Basics', image: 'https://picsum.photos/200', description: 'React OR Vue', author: 'John Doe', rating: 5 },
    { title: 'Advanced React', image: 'https://picsum.photos/200', description: 'NodeJS', author: 'Jane Smith', rating: 5 },
    { title: 'React Hooks', image: 'https://picsum.photos/200', description: 'React Hooks', author: 'Sam Doe', rating: 5 }
];

const FeaturedArticles = () => (
    <section className="articles-section">
        <h2>Featured Articles</h2>
        <div className="articles-list">
            {articles.map((article, index) => (
                <div className="card" key={index}>
                    <img src={article.image} alt={article.title} />
                    <div className="card-header">{article.title}</div>
                    <div className="card-meta">{article.description}</div>
                    <div className="card-description">
                        <span>⭐ {article.rating} {article.author}</span>
                    </div>
                </div>
            ))}
        </div>
        <button>See all articles</button>
    </section>
);

export default FeaturedArticles;
