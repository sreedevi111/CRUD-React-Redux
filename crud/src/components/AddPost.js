import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createPosts, editPosts } from "../features/postSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddPost = (props) => {
  const editData = props.editData;
  let editPost = props.editPost;
 
  const classes = useStyles();
  const [state, setState] = useState(
    editData
      ? {  id: editData.id , userId:  editData.userId, title: editData.title, body: editData.body }
      : {
        id:"",
        userId: "",
          title: "",
          body: "",
        }
  );
  let dispatch = useDispatch();
  const {id, userId, title, body } = state;

  
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId || !title || !body) {
      alert("Please fill all the fields");
    } else {
      let postParam = {userId, title, body};
      let bodyParam = {id, userId, title, body };

      console.log(bodyParam);
    editPost?  dispatch(editPosts(bodyParam)): dispatch(createPosts(postParam)); //HERE IS THE
     
    }
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>{editPost ? "Edit Post" : "Add Post"}</h1>
      <form
      style={{display:"flex", alignItems:'center', flexDirection:'column'}}
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="userId"
          name="userId"
          value={userId}
          type="number"
          onChange={handleChange}
        />
        <br />

        <TextField
          id="standard-basic"
          label="Title"
          name="title"
          value={title}
          type="text"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Body"
          name="body"
          value={body}
          type="text"
          onChange={handleChange}
        />
        <br />

        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
          // onClick={onSubmitClick()}
        >
          Submit
        </Button>
       
      </form>
    </div>
  );
};

export default AddPost;
