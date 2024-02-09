import React from 'react'
import UseEffectProducts from '../components/UseEffectProduct'

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-auto">
                <h1>Home</h1>
                <UseEffectProducts></UseEffectProducts>
            </div>
        </div>
    )
}

export default Home