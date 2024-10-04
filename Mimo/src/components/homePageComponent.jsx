import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './homePage.css';
import Sidebar from "./submodule/sidebar/sidebar";
import bulgass from "../assets/icons/bulgass.png";

const Home = () => {
    return (
        <>
            <div className="home-container">
                <Sidebar />
                <div className="mate">
                    <Link to={"/materials"} className="materials_element">
                        Materials
                    </Link>

                    <Link to={"/profile"} className="profile">
                        Profile
                    </Link>

                    <Link to={"/users"} className="users">
                        Users
                    </Link>

                    <Link to={"/ranking"} className="ranking">
                        Student rank
                    </Link>
                </div>
            </div>

            <section className="content">
                <h3>Join to our community. Improve your skills.</h3>
                <div className="feedback-container">
                    <div className="feedback">
                        <p>Li Siang</p>
                        <h4>"Bulgass's learning path provided a stable,
                             sustainable pace for several months of
                             constant progress."
                        </h4>
                        <pre>Frontend developer.</pre>
                    </div>

                    <div className="feedback">
                        <p>John Doe</p>
                        <h4>"What I gained from the course was the ability
                             to better understand
                             coding and how to work on a project."
                        </h4>
                        <pre>Backend developer.</pre>
                    </div>

                    <div className="feedback">
                        <p>Luka P.</p>
                        <h4>"I highly recommend Bulgass to anyone looking to
                             learn web development.
                             I promise you will not regret it."
                        </h4>
                        <pre>Backend developer.</pre>
                    </div>
                </div>
            </section>

            <div className="explaining">
                <h1>Python, JavaScript, HTML, CSS, and more</h1>
                <p>
                   Choose between a range of beginner-friendly<br/>
                   learning paths, hand-crafted<br/>
                   by learning experts and backed by research
                </p>
            </div>
            
            <section className="developments">
                <div className="block-container">
                    <div className="block-content">
                        <i className="fas fa-laptop-code"/>
                    </div>
                    <div className="block-info">
                        <h2>Full-stack Development</h2>
                        <p>
                            Discover the core of both front-end and back-end development. Learn to
                            create user interfaces and master key programming languages and frameworks
                            driving today's web.
                        </p>
                        <div className="block-icons">
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                            <i className="fab fa-js"></i>
                            <i className="fas fa-database"></i>
                            <i className="fab fa-node-js"></i>
                            <i className="fab fa-git-alt"></i>
                            <i className="fab fa-docker"></i>
                        </div>
                    </div>
                </div>

                <div className="block-container">
                    <div className="block-content">
                        <i className="fas fa-computer"/>
                    </div>
                    <div className="block-info">
                        <h2>Frontend-Development</h2>
                        <p>
                            Dive into front-end development using
                            HTML, CSS, and JavaScript. Learn to craft
                            web pages and use React to develop engaging users-focused
                            web applications
                        </p>
                        <div className="block-icons">
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                            <i className="fab fa-js"></i>
                            <i className="fab fa-react"></i>
                        </div>
                    </div>
                </div>

                <div className="block-container">
                    <div className="block-content">
                        <i className="fas fa-server"/>
                    </div>
                    <div className="block-info">
                        <h2>PHP-Development</h2>
                        <p>
                            Learn PHP to develop work with server side of web
                            applications. And learn one of the best php's frameworks
                            Laravel.
                        </p>
                        <div className="block-icons">
                            <i className="fab fa-php"></i>
                            <i className="fab fa-laravel"></i>
                        </div>
                    </div>
                </div>

                <div className="block-container">
                    <div className="block-content">
                        <i className="fas fa-robot"></i>
                    </div>
                    <div className="block-info">
                        <h2>AI-Development</h2>
                        <p>
                            Learn how to utilize modern
                            AI tools to become a 10x more
                            productive software developer.
                        </p>
                        <div className="block-icons">
                            <i className="fas fa-brain"></i>
                            <i class="fa-solid fa-square-root-variable"></i>
                        </div>
                    </div>
                </div>
            </section>
            <div className="explaining">
                <h1>Learn to code anytime, from anywhere</h1>
                <p>With Bulgass, you can always choose the experience
                   that suits you best – on your computer or
                   on your phone.</p>
            </div>
            <section className="mini-cards">
                <div className="icon-blocks">
                    <i className="fas fa-gamepad"></i>
                        <div className="descriptions">
                            <h2>Gamified lessons</h2>
                            <p>
                                Learn with interactive<br/> exercises,
                                challenges, and projects,
                                crafted<br/> by learning experts
                                and backed by research
                            </p>
                    </div>
                </div>

                <div className="icon-blocks">
                    <i className="fas fa-book"></i>
                        <div className="descriptions">
                            <h2>Real-world projects</h2>
                            <p>
                                Build projects that
                                apply your 
                                coding<br/> skills in
                                real-life scenarios
                            </p>
                    </div>
                </div>

                <div className="icon-blocks">
                    <i className="fa-solid fa-trophy"></i>
                        <div className="descriptions">
                            <h2>Leadboardss</h2>
                            <p>
                            Compete with fellow learners
                            and climb<br/> the ranks
                            as you complete exercises,<br/>
                            challenges, and projects
                            </p>
                    </div>
                </div>
            </section>

            <footer className="ending">
                <img className="logo"
                    src={bulgass}/>
                    <div className="text">
                        <p>© 2024 Bulgass, Inc.</p>
                    </div>
            </footer>
        </>
    );
};

export default Home;
