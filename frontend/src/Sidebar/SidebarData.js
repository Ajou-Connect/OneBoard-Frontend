import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: '프로필',
    path: '/Main/Profile',
    icon: <BsIcons.BsPersonBoundingBox />,
    cName: 'nav-text',
  },
  {
    title: 'Home',
    path: '/Main/Home',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text',
  },
  {
    title: '강의목록',
    path: '/Main/Lecture',
    icon: <BsIcons.BsFillCameraVideoFill />,
    cName: 'nav-text',
  },
  // {
  //   title: 'Logout',
  //   path: '/Main/logout',
  //   icon: <BsIcons.BsArrowBarLeft />,
  //   cName: 'nav-text',
  // },
];
