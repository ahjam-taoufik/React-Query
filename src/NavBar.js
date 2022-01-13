import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/super'>Super</Link>
        <Link to='/rq'>Request</Link>
        <Link to='/pagination'>Pagination</Link>

        </nav>
    )
}

export default NavBar
