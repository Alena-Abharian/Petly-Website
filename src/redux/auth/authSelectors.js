export const selectUserName = state => state.auth.user.name;

export const selectAccessToken = state => state.auth.accessToken;

export const selectRefreshToken = state => state.auth.refreshToken;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectErrorAuth = state => state.auth.error;

export const selectAvatarUser = state => state.auth.user.avatarUrl;

export const selectUserData = state => state.auth.user;

export const selectPets = state => state.auth.user.myPets;
