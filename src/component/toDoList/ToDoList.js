import {useGetDataQuery, useCreateDataMutation, useDeleteDataMutation} from "../api/apiSlice";
import { useState } from "react";


function ToDoList () {

    const [dataNewList, setNewDataList] = useState('')

    const { data: dataList = [],
            } = useGetDataQuery()
            
    const [newData] = useCreateDataMutation()

    const [deleteDataItem] = useDeleteDataMutation()

    const onHandleChange = (e) => {
        e.preventDefault()
        const newDataListToDo = {
            title: dataNewList
        }
        newData(newDataListToDo).unwrap()
    }

    const deleteData = id => {
        deleteDataItem(id).unwrap()
    }

    const showData = arr => {
        return arr.map(item => {
            return (
                <div key={item.id}>
                    <li>{item.title}
                        <button onClick={() => deleteData(item.id)}>X</button>
                    </li>
                
                </div>
            )
        })
    }

    const dataListShow = showData(dataList)
    console.log(dataList)        
    return (
        <div>
            <form action="" onSubmit={onHandleChange}>
                <input type="text" name="title" onChange={e => setNewDataList(e.target.value)}/>
                <button type="submit">Click</button>


                <ul>
                    {dataListShow}
                </ul>
            </form>
        </div>
    )
}

export default ToDoList