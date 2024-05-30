import { useState } from "react";
import { postGrocery } from "../../groceryApi/grocery.api";

postGrocery()

function AddGroceryForm(props) {
    const [nameValue, setNameValue] = useState('');
    const[quantityValue, setQuantityValue] = useState('');
    const [unitValue, setUnitValue] = useState('');

const handleChangeOfName = (event) => {
    setNameValue(event.target.value);
};
const handleChangeOfQuantity = (event) => {
    setQuantityValue(event.target.value);
};
const handleChangeOfUnit = (event) => {
    setUnitValue(event.target.value);
};

const handleSubmitGrocery = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
    Name: nameValue,
    Quantity: quantityValue,
    Unit: unitValue,
    });

};
return (
    <form onSubmit={handleSubmitGrocery}>
      <label>
        <span>Name:</span>
        <input
          id="name"
          onChange={handleChangeOfName}
          value={nameValue}
        />
      </label>
      <label>
        <span>Quantity:</span>
        <input
          id="quantity"
          onChange={handleChangeOfQuantity}
   
          value={quantityValue}
        />
      </label>
      <label>
        <span>Unit:</span>
        <input
          id="unit"
          onChange={handleChangeOfUnit}
          value={unitValue}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default AddGroceryForm;