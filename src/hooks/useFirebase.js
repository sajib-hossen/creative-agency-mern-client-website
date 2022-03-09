import { useState } from "react";

const useFirebase = () => {
  const [users, setUsers] = useState({});

  return {
    users,
  };
};

export default useFirebase;
