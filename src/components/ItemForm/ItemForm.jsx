// Item Form will need a POST 
// create a add Item function using post that also renders the item
postGrocery({
    Name: nameValue,
    Quantity: quantityValue,
    Unit: unitValue,
  })
    .then((response) => {
      props.groceryRefreshCallback();
      setNameValue('');
      setQuantityValue('');
      setUnitValue('');
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });