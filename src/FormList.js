
export const FormList = ({item, deleteList, checkItem, checked}) =>{
// const [isActive, setIsActive] = useState(false)
// const changeHandler = () =>{
//   setIsActive(!isActive)
// }
// useEffect(()=>{
//   if(!isActive){
//     checkItem((prevCount) =>{
//       if(prevCount !== 0){
//         return prevCount - 1
//       }
//       return prevCount
//     })
//   }
//   if (isActive) {
//       checkItem((prevCount) => prevCount + 1);
//     }
// }, [isActive, checkItem])
  return(
    <>
    {/* <h1>{checked}</h1> */}
    <div className="item ">
      <div className="item-box">
        {/* <input type="checkbox" checked={isActive} onChange={changeHandler}/> */}
        <p >{item.itemList}</p>
      </div>
      
      <button className="btn" onClick={()=>deleteList(item.id)}>Delete</button>
    </div>
    </>
  )
}