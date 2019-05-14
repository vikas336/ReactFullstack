import React from 'react'
import { Link } from 'react-router-dom';         //Always use react-router-dom

const Header = () => {
    return (
        <header>
            <div data-collapse="none" data-animation="default" data-duration="400" className="navbar w-nav">
                <a href="/" className="brand w-nav-brand w--current">
                    <img src="/public/vendor/logo.PNG" width="130" alt="g4ce logo" />
                </a>
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <a className="link-nav w-nav-link w--current">
                        <Link to={'/'}>Home</Link>
                    </a>
                    <a className="link-nav w-nav-link">
                        <Link to={'/tutorial'}>Tutorial</Link>
                    </a>
                    <a className="link-nav w-nav-link">
                        <Link to={'/blog'}>Blog</Link>
                    </a>
                    <a className="link-nav w-nav-link">
                        <Link to={'/contact'}>Contact</Link>
                    </a>
                </nav>
                <div className="w-nav-button">
                    <div className="w-icon-nav-menu">
                    </div>
                </div>
                <div className="w-nav-overlay" data-wf-ignore="">
                </div>
            </div>
        </header>
    )
}
export default Header;   