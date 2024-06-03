import React from 'react';
import './InsightsResources.css';

function InsightsResources() {
    return (
        <div className="insights-resources">
            <section className="introduction">
                <h2>Insights and Resources</h2>
                <p>Explore our blog posts, publications, and media appearances to stay informed about the latest trends, best practices, and insights on leadership and governance.</p>
            </section>

            <section className="content-section">
                <h3>Blog</h3>
                <div className="content-item">
                    <h4>Latest Post: ‘Adapting Leadership Styles in a Post-Pandemic World.’</h4>
                    <p>Read our latest blog post to learn how leadership styles are evolving in response to the challenges brought about by the global pandemic.</p>
                    <a href="/blog/adapting-leadership-styles">Read more</a>
                </div>
            </section>

            <section className="content-section">
                <h3>Publications</h3>
                <div className="content-item">
                    <h4>Download our latest ebook ‘Parable of Politics’ for actionable insights.</h4>
                    <a href="/publications/parable-of-politics">Download now</a>
                </div>
            </section>

            <section className="content-section">
                <h3>Media Appearances</h3>
                <div className="content-item">
                    <h4>Watch Seyi discuss ‘Sustainable Governance’ on TVC.</h4>
                    <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">Watch now</a>
                </div>
            </section>
        </div>
    );
}

export default InsightsResources;
