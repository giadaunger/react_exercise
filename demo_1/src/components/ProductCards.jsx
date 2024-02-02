import React from 'react'

function ProductCards() {

    function addStar(student) {
        if(student === "Tobias") {
            return <div>*</div>
        } else if(student === "Giada") {
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

      let students = ["Melanie", "Giada", "Omar", "Tobias"]

  return (
    <>
        {
            students.map((student) => {
                return <div className="p-8 border shadow-lg m-5">
                    {`Hello ${student}`}
                    {student === "Tobias" && <span> !!!</span>}
                    {student === "Tobias" ? <div>Teacher</div> : <div>Student</div>}
                    {addStar(student)}
                </div>
            })
        }
    </>
  )
}

export default ProductCards