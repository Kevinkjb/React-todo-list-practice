import {useState} from 'react'
export const AddForm = ({sendFormInfo})=>{

  const clearData = {
      itemList: "",

  }
  const [formData, setFormData] = useState(clearData)

  function publishForm(){
    const dataInfo ={
      id: Math.floor(Math.random() * 1000),
      itemList: formData.itemList
      

    }
    console.log(dataInfo)
    sendFormInfo(dataInfo)
    setFormData(clearData)
  }

  return(
    <>
      
      <br></br>

      <input
        onChange={(e)=>{setFormData({...formData, itemList: e.target.value})}}
        value={formData.itemList}
      />
      <button
        onClick={publishForm}
        type='submit'
      >
        Add
      </button>
    </>
  )
}