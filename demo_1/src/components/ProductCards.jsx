import React from 'react'

function ProductCards() {

    function addStar(student) {
        if (student === "Tobias") {
            return <div>*</div>
        } else if (student === "Giada") {
            return <div>**</div>
        } else {
            return <div>*******</div>
        }
    }

    const products = [
        {
            id: 1,
            name: "T-Shirt 1",
            price: 19.99,
            features: ["100% Cotton", "Lightweight", "Unisex"],
            isInStock: true,
            imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
        },
        {
            id: 2,
            name: "T-Shirt 2",
            price: 24.99,
            features: ["Polyester Blend", "Breathable", "Unisex"],
            isInStock: false,
            imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
        },
        {
            id: 3,
            name: "T-Shirt 3",
            price: 69.99,
            features: ["Wool", "Breathable", "Female"],
            isInStock: true,
            imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
        },
        // Add more products as needed
    ];

    // let students = ["Melanie", "Giada", "Omar", "Tobias"]

    return (

        <div className="grid grid-cols-3 my-20 gap-10">
            {
                products.map((product) => {
                    return <div className="shadow-lg border">
                        <div>
                            <img src={product.imageUrl} alt="img" />
                        </div>
                        <div className="p-8">
                            {product.name}
                            <div>{product.price}</div>
                            <div className="m-4 flex flex-wrap">
                                {
                                    product.features.map((feature) => {
                                        return <span className="px-4 py-2 my-2 bg-gray-300 rounded-full mr-2 bg-opacity-35">{feature}</span>
                                    })
                                }
                            </div>
                            {product.isInStock === false && <div className="text-red-600">Not in stock</div>}
                        </div>
                    </div>
                })
            }
        </div>

        // <>
        //     {
        //         students.map((student) => {
        //             return <div className="p-8 border shadow-lg m-5">
        //                 {`Hello ${student}`}
        //                 {student === "Tobias" && <span> !!!</span>}
        //                 {student === "Tobias" ? <div>Teacher</div> : <div>Student</div>}
        //                 {addStar(student)}
        //             </div>
        //         })
        //     }
        // </>
    )
}

export default ProductCards