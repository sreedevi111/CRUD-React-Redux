import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { deletePosts, getPosts } from "../features/postSlice";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import ModalInFunctionalComponent from "./Modal";
import { AsyncThunkAction } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { StringDecoder } from "string_decoder";

const useButtonStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginTop: 2,
    minWidth: 900,
  },
});

function Home() {
  const classes = useStyles();
  const buttonStyles = useButtonStyles();
  let dispatch:AsyncThunkAction<any, void, {}> = useDispatch();
 
  const { posts } = useSelector((state: any) => state.post);
  const [edit, setEdit] = useState(false); // boolean for edit =====> editPost
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editData, setEditData] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });
  // to display data in edit option

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
    setEdit(false);
    setEditData({ userId: "", id: "", title: "", body: "" });
  };

  //API Call
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const selector = useSelector((state) => state);

  return (
    <div>
      <p>{selector.loading}</p>

      <div className={buttonStyles.root} style={{ marginLeft: "1300px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setModalIsOpenToTrue();
            setEdit(false);
          }}
        >
          Add Post
        </Button>
      </div>
      <ModalInFunctionalComponent
        isOpen={modalIsOpen}
        setModalIsOpenToFalse={setModalIsOpenToFalse}
        editPost={edit}
        editData={editData} // available data in modal
      />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Id</StyledTableCell>
              <StyledTableCell align="center">id</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Body</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <StyledTableRow key={post.name}>
                <StyledTableCell component="th" scope="row">
                  {post.userId}
                </StyledTableCell>
                <StyledTableCell align="center">{post.id}</StyledTableCell>
                <StyledTableCell display="flex" align="center">
                  {post.title}
                </StyledTableCell>
                <StyledTableCell align="center">{post.body}</StyledTableCell>

                <StyledTableCell align="center">
                  <div className={buttonStyles.root}>
                    <ButtonGroup
                      style={{ borderRadius: "10px" }}
                      variant="contained"
                      color="primary"
                      aria-label="contained primary button group"
                    >
                      <Button
                        color="secondary"
                        onClick={() => {
                          dispatch(deletePosts({ id: post.id }));
                          alert("Deleted");
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => {
                          setModalIsOpenToTrue();
                          setEdit(true);
                          setEditData({
                            //onClick storing the current data values. Passing the data to model componets as props.
                            userId: post.userId,
                            id: post.id,
                            title: post.title,
                            body: post.body,
                          });
                          console.log("editData");
                        }}
                      >
                        Edit
                      </Button>
                    </ButtonGroup>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;