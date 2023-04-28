import React from "react";
import { useState, useEffect } from "react";
function ItemList() {
    const arr = [
        { text: "item1", isChecked: false },
        { text: "item2", isChecked: false },
        { text: "item3", isChecked: false },
      ];
      
      const [newcopy, setNewcopy] = useState(arr);
      
      function handleInput(index) {
        setNewcopy((prevArr) => {
          const newArr = [...prevArr];
          newArr[index].isChecked = true;
          return newArr;
        });
      }
      
      function handleDelete(index) {
        setNewcopy((prevArr) => {
          const newArr = [...prevArr];
          newArr.splice(index, 1);
          return newArr;
        });
      }

  useEffect(() => {
    console.log(newcopy);
  }, [newcopy]);

  return (
    <div>
      <h1>Item List - Add and Delete</h1>
      <ul>
        {newcopy.map((item, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => handleInput(index)} />
            {item.text}{" "}
            {item.isChecked && (
              <button onClick={() => handleDelete(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
            }

export default ItemList;
