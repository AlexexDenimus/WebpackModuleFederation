import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/Dashboard";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
