import React from 'react';
import './FeaturedTutorials.css';

const tutorials = [
    { title: 'React Router', image: 'https://picsum.photos/200', description: 'JS6', username: 'Jane Doe', rating: 5 },
    { title: 'Express Basics', image: 'https://picsum.photos/200', description: 'ExpressJS', username: 'John Smith', rating: 4.9 },
    { title: 'React Hooks', image: 'https://picsum.photos/200', description: 'React Router', username: 'Sam Lee', rating: 5 }
];

const FeaturedTutorials = () => (
    <section className="tutorials-section">
        <h2>Featured Tutorials</h2>
        <div className="tutorials-list">
            {tutorials.map((tutorial, index) => (
                <div className="card" key={index}>
                    <img src={tutorial.image} alt={tutorial.title} />
                    <div className="card-header">{tutorial.title}</div>
                    <div className="card-meta">{tutorial.description}</div>
                    <div className="card-description">
                        <span>⭐ {tutorial.rating} {tutorial.username}</span>
                    </div>
                </div>
            ))}
        </div>
        <button>See all tutorials</button>
    </section>
);

export default FeaturedTutorials;
