// Selectors
export const getAllPosts = state => state.posts;
// Actions
const createActionName = actionName => `app/posts/${actionName}`;

// Actions creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;