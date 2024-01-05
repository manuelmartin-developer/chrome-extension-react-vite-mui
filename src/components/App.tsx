import React, { useState } from "react";
import { ShadowDom } from "../utils/ShadowDom";

export function App(): React.ReactElement | null {
  // Component states
  const [parentElement] = useState(() => document.querySelector("body"));

  return parentElement ? (
    <ShadowDom parentElement={parentElement} position="afterend">
      <></>
    </ShadowDom>
  ) : null;
}
