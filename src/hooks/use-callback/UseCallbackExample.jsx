import { useCallback, useState } from "react";
import Title from "./other-components/Title";
import Display from "./other-components/Display";
import Button from "./other-components/Button";

export default function UseCallbackExample() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const addProducts = useCallback(
    (productName) => {
      const newProduct = productName + products.length;
      setProducts([...products, newProduct]);
    },
    [products]
  );

  const addUsers = useCallback(
    (userName) => {
      const newUser = userName + users.length;
      setUsers([...users, newUser]);
    },
    [users]
  );

  return (
    <div>
      <Title />
      <Display displayLabel="Products" items={products} />
      <Button btnLable="addProduct-button" handleClick={addProducts} />
      <Display displayLabel="Users" items={users} />
      <Button btnLable="addUser-button" handleClick={addUsers} />
    </div>
  );
}
