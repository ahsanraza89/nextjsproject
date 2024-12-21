"use client"
import { useRouter } from "next/navigation";
// import { users } from "../data";
import styles from "./users1.module.css"   //user1 he css file dene pare ge

import { Provider, useDispatch, useSelector } from "react-redux";
import { meraStore } from "@/store/store";
import { removeuser } from "@/store/slices/user";
import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
    return <Provider store={meraStore}>

        <Users></Users>

    </Provider>


}

function Users() {

    let dispatch = useDispatch();
    let [users, setUsers] = useState([]);
    let router = useRouter();


    let data = useSelector((store) => {
        return store.userWalaSlice;
    })


    useEffect(() => {
        axios.get('/api/auth').then((resp) => {
            console.log(resp);

            setUsers(resp.data)
        })
    }, [])

    return <div className={styles.userr}>

        {/* <h1>{data.city}</h1> */}

        <table className={styles.tab1} >

            { //we use data when we use useSelector redux when through api we use users data.users.map
                users.map(function (user, i) {

                    return <tr >

                        <td className={styles.td1}>{user.email}</td> 

                        <td className={styles.td1}>{user.password}</td> 


                        <td >
                            <button className={styles.btn3} onClick={() => {
                                // router.push("/signup?abc=" + user.email)
                                router.push("/signup?abc=" + user._id)
                            }}>Edit</button>

                        </td>

                        {/* <td>
                        <button onClick={()=>{
                    dispatch(removeuser(i))
                        }}>Delete</button>
                        </td>  */}

                        <td >
                            <button className={styles.btn3} onClick={async () => {

                                try {

                                    if (confirm("Are you sure you wanna delete this")) {


                                        let resp = await axios.delete('/api/auth?abc=' + user._id);
                                        setUsers(users.filter((cUser) => {

                                            if (cUser._id != user._id) {
                                                return true;
                                            }
                                        }))
                                    }


                                } catch (e) {
                                    console.log(e);

                                }

                            }}>Delete</button>
                        </td>

                    </tr>
                })
            }
        </table>
    </div>
}