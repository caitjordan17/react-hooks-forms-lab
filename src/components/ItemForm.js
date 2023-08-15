import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }
  
  function handleAddNewItem(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category
    });
  }
  
  return (
    <form className="NewItem" onSubmit={handleAddNewItem}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleAddNewItem}>Add to List</button>
    </form>
  );
}

export default ItemForm;


//const [itemName, setItemName] = useState("")
//const [itemCategory, setItemCategory] = useState("Produce")
//jsut copied over these two (9 & 10) from itemform, need to replicate usestate format
//from search & filter, right? or could we handle all of that in itemform, pass new
//items to obj in items.js & carry it here? also check line 31 here

//pass functions made here as arguments in {} to a function in component below 
//in the app tree. then use those arguments in the "onChange" section of the line
//pass as props in return below