import { ReactNode } from 'react';

import { useAppSelector } from 'app/hooks';
import { Loader } from '../loader';

import styles from './styles.module.css';
import { UserInfo } from 'entities/user';
import { SideMenuForAuthorized } from 'widgets/side-menu';
import { useLocation } from 'react-router-dom';
import { FeedbackSideMenu } from 'widgets/side-menu/components/feedback-side-menu';

interface PageLayoutProps {
  content?: ReactNode;
}

export const PageLayout = ({ content }: PageLayoutProps) => {
  const isLoadingUserData = useAppSelector((state) => state.user.isLoading);
  const isLoadingTasksData = useAppSelector((state) => state.tasks.isLoading);
  const location = useLocation();

  return (
    <>
      {(isLoadingUserData || isLoadingTasksData) && <Loader />}
      {location.pathname === '/policy' ||
      location.pathname === '/blog' ||
      location.pathname === '/pick' ? (
        <div className={styles.content}> {content} </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.side}>
            <div className={styles.user}>
              <UserInfo />
            </div>
            {location.pathname === '/contacts' ||
            location.pathname === '/feedback' ? (
              <FeedbackSideMenu />
            ) : (
              <SideMenuForAuthorized />
            )}
          </div>
          <div className={styles.content}> {content} </div>
        </div>
      )}
    </>
  );
};
