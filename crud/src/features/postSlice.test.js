import reducer, { getPosts } from "./postSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    posts: [],
    postCreated: {},
    loading: false,
  });
});

test("get all the posts", () => {
  const previousState = {
    posts: [],
    postCreated: {},
    loading: false,
  };
  expect(reducer(previousState, getPosts()).posts.length).toEqual(100)
});

