import React, { useState } from "react";
import { Button } from "./components/buttons/styled";
import { ColorPicker, ColorBox, ColorInput } from "material-ui-color";

function App() {
  const [active, setActive] = useState("");
  return (
    <div style={{ width: "100vw", padding: "50px" }}>
      <p>Buttons</p>
      <div className="button-group">
        <div
          className={active}
          onClick={() => setActive(active ? "" : "active")}
        >
          <label>Submit</label>
        </div>
        <div onClick={() => setActive(active ? "" : "active")}>
          <label>Submit</label>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          lg
          bg={"#dc004e"}
          onClick={() => setActive(active ? "" : "active")}
          className={active}
        >
          Ok
        </Button>
        <Button
          lg
          bg={"#dc004e"}
          onClick={() => setActive(active ? "" : "active")}
        >
          Ok
        </Button>
        <Button
          lg
          bg={"green"}
          onClick={() => setActive(active ? "" : "active")}
          className={active}
        >
          Ok
        </Button>
        <Button
          lg
          bg={"green"}
          onClick={() => setActive(active ? "" : "active")}
        >
          Ok
        </Button>
      </div>
    </div>
  );
}

export default App;
