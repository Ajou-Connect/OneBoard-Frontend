import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: '프로필',
    path: '/Profile',
    icon: <BsIcons.BsPersonBoundingBox />,
    cName: 'nav-text',
  },
  {
    title: 'Home',
    path: '/',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text',
  },
  {
    title: '강의목록',
    path: '/Lecture',
    icon: <BsIcons.BsFillCameraVideoFill />,
    cName: 'nav-text',
  },
  {
    title: '공지사항',
    path: '/Notice',
    icon: <BsIcons.BsFillInfoCircleFill />,
    cName: 'nav-text',
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <BsIcons.BsArrowBarLeft />,
    cName: 'nav-text',
  },
];
