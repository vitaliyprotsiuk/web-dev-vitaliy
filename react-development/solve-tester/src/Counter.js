import { TextField } from '@mui/material';

function Counter(props) {

  return (
    <TextField 
        aria-readonly 
        id="standard-basic" 
        label="Standard" 
        variant="standard" 
        value={props.count}/>
  );
};




export default Counter;
