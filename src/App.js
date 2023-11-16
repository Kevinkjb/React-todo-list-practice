import { useState } from "react"
import { AddForm } from "./AddForm"
import { FormList } from "./FormList"
import './index.css'

export const App = () =>{
  const [itemList, setItemList] = useState([])
  // const [checked, setCheck] = useState(0)
  return(
    <>
      
      <h1>Todo List</h1>
      <AddForm
        sendFormInfo={formItem => setItemList([...itemList, formItem])}
      />
      {/* <h1>Total Finish: {checked}</h1> */}
      <ul className="item-list">
        {itemList.map(item => (
            <FormList
              key={item.id}
              item={item}
              // checkItem={setCheck}
              deleteList={id => setItemList(itemList.filter(item => item.id !== id))}
            />
          ))
        }
      </ul>
    </>

  )
}