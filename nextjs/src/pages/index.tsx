import { useStore } from "effector-react";
import React, { useState } from "react";
import { userStore } from "../modules/User/user-store";

const Index = () => {
  const [open, setOpen] = useState(true);
  const user = useStore(userStore);

  return (
    <div className="container p-1">
      {/* <Feed /> */}
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <div className="d-flex">
        {/* <Modal open={open} close={() => setOpen(false)}>
          <h1>asdf</h1>
        </Modal> */}
      </div>
    </div>
  );
};

export default Index;
