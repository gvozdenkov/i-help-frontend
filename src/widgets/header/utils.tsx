import { WriteMessageIcon } from 'shared/ui/icons/write-message-icon';
import { PersonIcon } from 'shared/ui/icons/person-icon';
import { LockIcon } from 'shared/ui/icons/lock-icon';
import { LocationIcon } from 'shared/ui/icons/location-icon';

import type {
  ISideBarPosition,
  ISideBarElementProps,
} from 'widgets/header/navigation/types';
import { ReadMessageIcon } from 'shared/ui/icons/read-message-icon';

export const positionConfigTop: ISideBarPosition = {
  ulflexDirection: 'row',
  ulgap: 10,
  element: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 0,
    textAlign: 'center',
  },
};

export const positionConfigMenu: ISideBarPosition = {
  ulflexDirection: 'column',
  ulgap: 35,
  element: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    gap: 0,
    textAlign: 'right',
  },
};

export const linksTop: ISideBarElementProps[] = [
  {
    title: 'Личный кабинет',
    to: '/profile',
    icon: <PersonIcon color="blue" />,
  },
  {
    title: 'Блог',
    to: '/blog',
    icon: <WriteMessageIcon color="blue" />,
  },
  {
    title: 'Политика конфиденциальности',
    to: '/policy',
    icon: <LockIcon color="blue" />,
  },
  {
    title: 'Контакты',
    to: '/contacts',
    icon: <LocationIcon color="blue" />,
  },
];

export const linksTopAuthUser: ISideBarElementProps[] = [
  {
    title: 'Личный кабинет',
    to: '/profile',
    icon: <PersonIcon color="blue" />,
  },
  {
    title: 'Блог',
    to: '/blog',
    icon: <WriteMessageIcon color="blue" />,
  },
  {
    title: 'Политика конфиденциальности',
    to: '/policy',
    icon: <LockIcon color="blue" />,
  },
  {
    title: 'Контакты',
    to: '/contacts',
    icon: <LocationIcon color="blue" />,
  },
];

export const linksTopAuthAdmin: ISideBarElementProps[] = [
  {
    title: 'Личный кабинет',
    to: '/profile',
    icon: <PersonIcon color="blue" />,
  },
  {
    title: 'Блог',
    to: '/blog',
    icon: <WriteMessageIcon color="blue" />,
  },
  {
    title: 'Политика конфиденциальности',
    to: '/policy',
    icon: <LockIcon color="blue" />,
  },
  {
    title: 'Контакты',
    to: '/contacts',
    icon: <LocationIcon color="blue" />,
  },
  {
    title: 'Чат',
    to: '/chats-hub',
    icon: <ReadMessageIcon color="blue" />,
  },
];

export const linksMenuMobileUnauthorized: ISideBarElementProps[] = [
  {
    title: 'Личный кабинет',
    to: '/profile',
    icon: <PersonIcon color="blue" />,
  },
  {
    title: 'Блог',
    to: '/blog',
    icon: <WriteMessageIcon color="blue" />,
  },
  {
    title: 'Политика конфиденциальности',
    to: '/policy',
    icon: <LockIcon color="blue" />,
  },
  {
    title: 'Контакты',
    to: '/contacts',
    icon: <LocationIcon color="blue" />,
  },
];
