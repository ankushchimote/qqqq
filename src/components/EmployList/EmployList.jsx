import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import './EmployList.css'
import ListCard from "../ListCard/ListCard";
import Modal from "../Modal/Modal";
import AddUpdate from "../AddUpdate/AddUpdate";

const EmployList = () => {
  const [list, setList] = useState([]);

  const [isOpen,setOpen] =useState(false)

  const onOpen =() =>{
    setOpen(true);
  }
  const onClose =() =>{
    setOpen(false)
  }

  useEffect(() => {
    const getList = async () => {
      try {
        const listRef = collection(db, "employees");
        const listSnapShot = await getDocs(listRef);
        const allList = listSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setList(allList)
        // console.log(list);
      } catch (error) {
        console.log(error);
        
      }
    };
    getList();
  }, []);

  return (
    <>
    <div>
        <button onClick={onOpen}>addMember</button>
        <div className="heading">
            <h3>Name</h3>
            <h3>Name</h3>
            <h3>Name</h3>
            <h3>Name</h3>
            <h3>Name</h3>
            <h3>Name</h3>
        </div>
        <div >
        {list.map(object => (
            <ListCard key={object.id} object={object}/>
        ))}
        </div>
    </div>
    <AddUpdate onClose={onClose} isOpen={isOpen}/>
    </>
  )
};

export default EmployList;
