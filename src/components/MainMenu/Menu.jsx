import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Price from './Price'
import About from './About'
import Card2 from './card-2'

export default function Menu() {
    return (
        <div>
            <Navbar />
            <About />
            <Card />
            <Card2 />
            <Price />
            

        </div>
    )
}
