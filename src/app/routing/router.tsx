import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { RoutesGroup } from 'app/routing/components/routes-group';

import { Layout } from 'pages/layout';

import { UnauthPage } from 'pages/unauth';
import { RequestsPage } from 'pages/requests';
import { RequestsVolunteersPage } from 'pages/requests-volunteers';
import { BlogPage } from 'pages/blog';
import { PolicyPage } from 'pages/policy';
import { ContactsPage } from 'pages/contacts';
import { FeedbackPage } from 'pages/feedback';
import { ProfilePage } from 'pages/profile';
import { PickRolePage } from 'pages/pick-role-page-temporary';
import { RegisterPage } from 'pages/register';
import { NotFoundPage } from 'pages/not-found';
import { ProfileMapPage } from 'pages/profile-map';
import { ProfileActivePage } from 'pages/profile-active';
import { ProfileCompletedPage } from 'pages/profile-completed';
import { RequestsRecipientsPage } from 'pages/requests-recipients';
import { RequestsNotprocessedPage } from 'pages/requests-notprocessed';
import { StatisticsPage } from 'pages/statistics';
import { TasksPage } from 'pages/tasks';
import { RequestsAdminsPage } from 'pages/requests-admins';
import { SettingsPage } from 'pages/settings';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route element={<RoutesGroup publicRoutes />}>
          <Route index element={<UnauthPage />} />

          <Route path="/blog" element={<BlogPage />} />

          <Route path="/policy" element={<PolicyPage />} />

          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />

          {/* Удалить когда система аутификации будет готова */}
          <Route path="/pick" element={<PickRolePage />} />
        </Route>

        <Route element={<RoutesGroup onlyUnauthorized />}>
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/login" element={<></>} />
        </Route>

        <Route
          element={
            <RoutesGroup
              allowed={{
                volunteer: true,
                recipient: true,
                admin: true,
                master: true,
              }}
            />
          }
        >
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/chat" element={<></>} />
        </Route>

        <Route
          element={
            <RoutesGroup
              allowed={{
                volunteer: true,
              }}
            />
          }
        >
          <Route path="/profile/map" element={<ProfileMapPage />} />
        </Route>

        <Route
          element={
            <RoutesGroup
              allowed={{
                volunteer: true,
                recipient: true,
              }}
            />
          }
        >
          <Route path="/profile/active" element={<ProfileActivePage />} />

          <Route path="/profile/completed" element={<ProfileCompletedPage />} />
        </Route>

        <Route
          element={
            <RoutesGroup
              allowed={{
                admin: true,
                master: true,
              }}
            />
          }
        >
          <Route path="/requests" element={<RequestsPage />} />
          <Route
            path="/requests/volunteers"
            element={<RequestsVolunteersPage />}
          />

          <Route
            path="/requests/recipients"
            element={<RequestsRecipientsPage />}
          />

          <Route
            path="/requests/notprocessed"
            element={<RequestsNotprocessedPage />}
          />

          <Route path="/statistics" element={<StatisticsPage />} />

          <Route path="/tasks" element={<TasksPage />} />
        </Route>

        <Route
          element={
            <RoutesGroup
              allowed={{
                master: true,
              }}
            />
          }
        >
          <Route path="/requests/admins" element={<RequestsAdminsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);
