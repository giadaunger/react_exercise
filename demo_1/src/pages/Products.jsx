import React, { useState } from 'react'

function Products() {

    const [nameInput, setNameInput] = useState("")

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-auto">
                <h1>Products</h1>
                <div className="container mx-auto p-10">
                    <input type="input" placeholder="Enter your name" onChange={(event) => setNameInput(event.target.value)} className="border border-black" />
                </div>
                <div>
                    {nameInput}
                </div>
            </div>
        </div>
    )
}

export default Products