import { useState, useEffect } from "react";
import db from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { map } from "@firebase/util";

function Accidents() {

    const [users, setUsers]= useState([]); 
    const ref = collection(db, "accidents");
    useEffect(() => {
        const getUsers = async() => {
            const data = await getDocs(ref);
            console.log(data);
            setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }
        getUsers();
    })
    return (
        <div className="Accident my-3">
            <h1>Fetch Data</h1>
            <button>Fetch</button>
            <div>{ users.map((obj) => {
                return (
                  <>
                    <h1>Address: {obj.address}</h1>
                    <h1>
                      <img src={obj.imageUrl} alt="IMG" width="50%" />
                    </h1>
                  </>
                );
            })};
            </div>
        </div>
    );
}

export default Accidents;