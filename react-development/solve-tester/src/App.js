import { Button, TextField } from "@mui/material";
import Counter from "./Counter";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(1);

  

  return (
    <div>
      <div style={{margin: '10px'}}>
        <Counter count={count}/>

        <Button 
          variant="outlined" 
          onClick={() => setCount(count += step)}>
            Increment
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => setCount(count = 0)}>
            Set to 0
        </Button>
      </div>
      <div style={{margin: '10px'}}>
        <TextField 
          id="outlined-basic" 
          label="Set step" 
          variant="filled" 
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App;
