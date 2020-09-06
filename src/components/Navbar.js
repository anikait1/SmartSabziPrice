import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header>
                    <form className="form-inline">
                        <input type="search" placeholder="Location" aria-label="Search" />
                        <button type="submit">Search</button>
                    </form>
                    <nav>
                    <ul className="nav_links">
                        <li><a href="#">Vegetables</a></li>
                        <li><a href="#">Fruits</a></li>
                    </ul>
                    </nav>
                    <ul className="nav_links">
                        <li><a href="#"><i className="fa fa-user-plus" />  Sign Up</a></li>
                        <li><a href="#"><i className="fa fa-user" />  Login</a></li>
                    </ul>
                </header>
            </div>
        )
    }
}
