import LiItem from './LiItem';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { selectUserData } from 'redux/auth/authSelectors';

function UserDataItem() {
  const userInfo = useSelector(selectUserData);
  const [active, setActive] = useState(''); // name

  return (
    <ul>
      <LiItem
        active={active}
        setActive={setActive}
        name={'name'}
        label={'Name:'}
        user={userInfo.name}
      />
      <LiItem
        active={active}
        setActive={setActive}
        name={'birthday'}
        label={'Birthday:'}
        user={userInfo.birthday}
      />
      <LiItem
        active={active}
        setActive={setActive}
        name={'email'}
        label={'Email:'}
        user={userInfo.email}
      />
      <LiItem
        active={active}
        setActive={setActive}
        name={'phone'}
        label={'Phone:'}
        user={userInfo.phone}
      />
      <LiItem
        active={active}
        setActive={setActive}
        name={'city'}
        label={'City:'}
        user={userInfo.city}
      />
    </ul>
  );
}

export default UserDataItem;
