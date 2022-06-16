import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
        display:"flex",
        justifyContent:"center",
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddPost = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    userId: " ",
    title: " ",
    body: " ",
  });

  const { userId, title, body } = state;
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        
<TextField
          id="standard-basic"
          label="userId"
          value={userId}
          type="number"
        />
        <br />

        <TextField
          id="standard-basic"
          label="Title"
          value={title}
          type="text"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Body"
          value={body}
          type="text"
        />
        <br />

        <Button 
        style={{width:'100px'}}
        variant="contained" 
        color="primary"
         type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddPost;
