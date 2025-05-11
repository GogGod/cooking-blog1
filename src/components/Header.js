import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Cooking Blog</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/category">Categories</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;