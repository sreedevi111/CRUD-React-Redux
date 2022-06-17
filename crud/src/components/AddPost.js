import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createPosts } from "../features/postSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddPost = (props) => {
  const editData = props.editData;
  const classes = useStyles();
  const [state, setState] = useState(
    editData
      ? { userId: editData.userId, title: editData.title, body: editData.body }
      : {
          userId: "",
          title: "",
          body: "",
        }
  );
  let dispatch = useDispatch();
  const [error, setError] = useState("");
  const { userId, title, body } = state;

  useEffect(() => {
    dispatch(createPosts());
  }, []);

  const handleChange = (e) => {
    // let name = e.target.name
    // let value = e.target.value
    //  let bodyParam = {userId, title, body};
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId || !title || !body) {
      setError("Please fill all the fields");
      console.log("ERROR");
    } else {
      let bodyParam = { userId, title, body };

      console.log(bodyParam);
      dispatch(createPosts(bodyParam));
    }
  };

  let editPost = props.editPost;

  return (
    <div>
      <h1>{editPost ? "Edit Post" : "Add Post"}</h1>
      <form
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
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddPost;
