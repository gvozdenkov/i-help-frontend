import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Filter } from 'features/filter';
import { TaskList } from 'entities/task/ui/task-list';
import { useMediaQuery } from 'shared/hooks';
import { SmartHeader } from 'shared/ui/smart-header';
import { Icon } from 'shared/ui/icons';
import { openPopup } from 'features/create-request/model';
import { Request } from 'features/create-request';
import { useGetTasksByStatusQuery } from 'services/tasks-api';
import { Loader } from 'shared/ui/loader';
import { CONFIRMED } from 'shared/libs/statuses';

export function ProfileActivePage() {
  const dispatch = useAppDispatch();
  const { data: tasks, isLoading } = useGetTasksByStatusQuery('active');
  const { role, data } = useAppSelector((state) => state.user);
  const isConfirmed = data?.status === CONFIRMED;
  const isMobile = useMediaQuery('(max-width:1150px)');

  const { isPopupOpen } = useAppSelector((store) => store.createRequest);
  const isMobileForPopup = useMediaQuery('(max-width:735px)');

  return (
    <>
      <SmartHeader
        text="Активные заявки"
        icon={<Icon color="blue" icon="ActiveApplicationIcon" size="54" />}
        filter={
          role === 'volunteer' ? (
            <Filter
              items={{
                sort: true,
                categories: true,
                radius: true,
                date: false,
                time: true,
              }}
            />
          ) : isConfirmed ? (
            <Filter
              items={{
                sort: true,
                categories: true,
                radius: false,
                date: false,
              }}
            />
          ) : (
            <></>
          )
        }
      />
      {isLoading ? (
        <Loader />
      ) : (
        <TaskList
          userRole={role}
          isMobile={isMobile}
          handleClickAddTaskButton={() => dispatch(openPopup())}
          isStatusActive
          tasks={isConfirmed ? tasks : []}
          isLoading={isLoading}
        />
      )}

      {isPopupOpen && <Request isMobile={isMobileForPopup} />}
    </>
  );
}
