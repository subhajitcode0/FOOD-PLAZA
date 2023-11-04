import React from 'react'

export default function Card() {
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px", background: "black" }}>
        <img src="https://media.istockphoto.com/id/1222401408/photo/fried-meat-with-potatoes-pepper-tomatoes-herbs-and-spices-in-plate-on-black-wooden-table.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=RnD1QKESXz-6iu_7S0P7xoLHvhLi0QRtCbbGJnXxN_Q=" alt="fried meat with potatoes, pepper, tomatoes, herbs and spices in plate on black wooden table background" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example </p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-success rounding">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total</div>
          </div>
        </div>
      </div>
  )
}
