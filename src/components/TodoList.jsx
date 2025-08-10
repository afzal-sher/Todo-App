import { MdDeleteForever } from "react-icons/md";
import { MdCheck } from "react-icons/md";


export const TodoList = ({ Data , onhandleCheckTodo, cheecked, onhandleDeleteTodo}) =>{

    return(

        <li>
                <span className={cheecked ? "checkList": "notCheckList"}>{Data}</span>
                <button onClick={() => onhandleDeleteTodo(Data)} className="delete-btn">
                  <MdDeleteForever />
                </button>
                <button className="check-btn" onClick={() => onhandleCheckTodo(Data)}>
                  <MdCheck />
                </button>
              </li>
    )
}