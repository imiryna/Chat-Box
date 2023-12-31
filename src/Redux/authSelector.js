export const selectAuth = state => state.auth;

export const selectUserData = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectAuthenticated = state => state.auth.authenticated;
export const selectError = state => state.auth.error;
export const selectIsLoading = state => state.auth.isLoading;
