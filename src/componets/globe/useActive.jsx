import { React, useState } from "react";

const useActive = () => {
  const [active, setActiveState] = useState(null);

  return [active, setActiveState];
};

export default useActive;
