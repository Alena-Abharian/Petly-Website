const getAge = birthday => {
  if (!birthday || birthday === '00.00.0000') return '-------------';

  const dateNow = new Date().getFullYear();
  const age = dateNow - new Date(birthday).getFullYear();
  if (age < 1) return ' less than a year';
  if (age > 1) return age + ' years';
  if (age === 1) return age + ' year';
  if (age === 0) {
    const monthNow = new Date().getMonth();
    const month = monthNow - new Date(birthday).getMonth();
    if (month === 1) return month + ' month';
    return month + ' months';
  }
};

const delSpaces = text => {
  const normalized = text.replace(/\s+/g, ' ').trim();
  return normalized;
};

const isElemArray = (arrNotice = [], noticeId) => {
  if (!arrNotice?.length === 0) {
    return false;
  }
  const isInclude = arrNotice.find(id => id === noticeId);

  if (!isInclude) {
    return false;
  }
  return true;
};

export const helpers = {
  getAge,
  delSpaces,
  isElemArray,
};
