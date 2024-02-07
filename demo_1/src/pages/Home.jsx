import React from 'react'
import useEffectProducts from '../components/UseEffectProduct'

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-auto">
                <h1>Home</h1>
                <useEffectProducts></useEffectProducts>
            </div>
        </div>
    )
}

export default Home