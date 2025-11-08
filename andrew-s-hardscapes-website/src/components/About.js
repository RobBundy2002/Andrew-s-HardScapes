import React from 'react';
import './About.css';

function About() {
    return (
        <main className="about">
            <div className="about-hero">
                <h2>About Us</h2>
                <div className="about-content">
                    <p>Andrew's HardScapes is a premier landscaping and decking company dedicated to creating luxurious outdoor spaces. With years of experience and a passion for quality craftsmanship, we transform ordinary yards into stunning retreats.</p>
                    <p>Our team of skilled designers and installers work closely with each client to bring their vision to life. We use only the finest materials and employ proven techniques to ensure lasting beauty and functionality.</p>
                </div>
            </div>

            <div className="team-section">
                <h3 className="team-heading">Meet Our Team</h3>

                <div className="team-cards">
                    <div className="team-card">
                        <div className="card-image">
                            <img src="/images/andrew.jpg" alt="Micah Andrew Fields" />
                        </div>
                        <div className="card-header">
                            <div className="avatar">MA</div>
                            <div className="card-title-section">
                                <h4 className="card-role">Founder</h4>
                                <h3 className="card-name">Micah Andrew Fields</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-description">
                                Hi, I'm Micah Andrew Fields, founder of Andrew's Hardscapes. I've loved woodworking since I was a little kid, thanks to a multigenerational family history in the craft. From a young age, I was always outside building things—forts, ramps, or helping my Papaw build a new deck. That early passion for creating and being outdoors naturally led me into landscaping and hardscaping. At Andrew's Hardscapes, I take pride in every project and wake up each day excited to create beautiful, lasting outdoor spaces. When I'm not working, I enjoy playing guitar, spending time with family, soaking up the outdoors, and working in the wood shop. Let's build something great together.
                            </p>
                            <div className="card-tags">
                                <span className="tag">🎸 Guitar Player</span>
                                <span className="tag">🌲 Outdoor Enthusiast</span>
                                <span className="tag">🪵 Woodworking</span>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="card-image">
                            <img src="/images/Daniel.jpg" alt="Daniel Nelson" />
                        </div>
                        <div className="card-header">
                            <div className="avatar">DN</div>
                            <div className="card-title-section">
                                <h4 className="card-role">Operations Manager</h4>
                                <h3 className="card-name">Daniel Nelson</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-description">
                                Hi, I'm Daniel Nelson. I'm a Charlottesville, VA native with a love for numbers and all things organized. I've got a background in finance and a personal passion for budgeting—yeah, I'm a bit of a numbers nerd, and I own it. I'm always up for a good home project, and I'm weirdly proud that I can spell "receptacle" without hesitation. When I'm not working, I'm probably studying theology, spending time with my wife, or watching football.
                            </p>
                            <div className="card-tags">
                                <span className="tag">📊 Finance Expert</span>
                                <span className="tag">🏈 Football Fan</span>
                                <span className="tag">📚 Theology Student</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;