import React, { useEffect, useState } from 'react'
import Button from '../../components/common/Button.jsx'
import axios from "axios";

const Category = () => {
  const [items, setitems] = useState([])
  console.log(items)
  const deleteHanlde = async () => {
    await axios.delete(`https://teamwork-backend-lime.vercel.app/api/v1/cars/e680696e-34a7-4fae-a2f9-17eb1effe519`)
      .then(res => {
        alert("data delete sucessfully")
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
  return (
    <div>Category
      <Button />
      {
        items.map((item, index) => {
          return <div>
            <h1>{item.title}</h1>
          </div>
        })
      }

      <button className='mt-40' onClick={deleteHanlde}>delete</button>
    </div>
  )
}

export default Category