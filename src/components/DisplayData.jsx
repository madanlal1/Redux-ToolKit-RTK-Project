import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayData = () => {

    const data = useSelector(state =>  state.users);
    const dispatch = useDispatch();

  return (
    <>
        {
            data.map((user, id) => {
                return (
                    <li key={id}>{user}
                    <button className="btn btn-danger btn-sm"  onClick={()=>dispatch(removeUser(id))} >Delete</button>
                    </li>
                )
            })
        }
    </>
  )
}

export default DisplayData;