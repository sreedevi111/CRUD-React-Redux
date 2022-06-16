import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../features/postSlice";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {useNavigate} from 'react-router-dom'

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const posts = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});

function Home({navigation}) {
  const classes = useStyles();
  const buttonStyles = useButtonStyles();
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const { posts } = useSelector((state) => state.post);

  //API Call
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <div className= {buttonStyles.root}>
        <Button variant="contained"
         color="primary"
         onClick={()=>{
            navigate("AddPost")
            console.log("Check")
         }
        }
        
        >
          Add Post
        </Button>
      </div>

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
                      <Button style={{ marginRight: "5px" }} color="secondary">
                        Delete
                      </Button>
                      <Button color="primary">Edit</Button>
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
