import { helpers } from 'utils/helpers';

export const selectNoticeState = state => {
  const userId = state.auth.user._id;
  // const ownNotice = state.auth.user.own;
  const favNotice = state.auth.user.favorites;

  const { notices, isLoading, error, page, totalPage } = state.notice;
  const resultNotice = notices.reduce((acc, notice) => {
    // const own = helpers.isElemArray(ownNotice, notice._id);
    const own = notice?.owner?._id === userId ? true : false;
    const favorite = helpers.isElemArray(favNotice, notice._id);
    const newObject = { ...notice, favorite, own };
    acc.push(newObject);
    return acc;
  }, []);
  // .sort((a, b) => {
  //   return Number(a.own) - Number(b.own);
  // });
  return { resultNotice, isLoading, error, page, totalPage };
};

export const selectNotices = state => {
  return state.notice.notices;
};

export const selectIsLoading = state => {
  return state.notice.isLoading;
};

export const selectError = state => {
  return state.notice.error;
};
