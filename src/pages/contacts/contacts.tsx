import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SmartHeader } from '../../shared/ui/smart-header';
import { Icon } from '../../shared/ui/icons';
import { Button } from '../../shared/ui/button';
import usePermission from '../../shared/hooks/use-permission';
import { UserRole, UserStatus } from '../../shared/types/common.types';
import {
  useGetContactsQuery,
  useUpdateContactsMutation,
} from '../../services/contacts-api';
import { setContacts } from '../../entities/contacts/model';
import { TContacts } from '../../entities/contacts/types';

export function ContactsPage() {
  const isEditAllowed = usePermission([UserStatus.VERIFIED], UserRole.ADMIN);

  const [contactsData, setContactsData] = useState<TContacts>({
    email: null,
    socialNetwork: null,
  });

  const [editingInput, setEditingInput] = useState<
    'email' | 'socialNetwork' | null
  >(null);

  const dispatch = useAppDispatch();
  const { email, socialNetwork } = useAppSelector((state) => state.contacts);
  const [updateContacts, { isLoading }] = useUpdateContactsMutation();
  const getContactsResult = useGetContactsQuery();

  useEffect(() => {
    if (getContactsResult.data) {
      dispatch(setContacts(getContactsResult.data));
      setContactsData({
        email: email,
        socialNetwork: socialNetwork,
      });
    }
  }, [getContactsResult, email, socialNetwork]);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (isEditAllowed) {
      try {
        const resultAction = await updateContacts(contactsData);
        if ('data' in resultAction) {
          dispatch(setContacts(resultAction.data));
        } else {
          console.error('Ошибка при сохранении данных:', resultAction.error);
        }
        setEditingInput(null);
        setContactsData({
          email: email,
          socialNetwork: socialNetwork,
        });
      } catch (error) {
        console.error('Ошибка при сохранении данных:', error);
      }
    } else {
      setEditingInput(null);
      setContactsData({
        email: email,
        socialNetwork: socialNetwork,
      });
      console.log(
        'Изменение контактых данных не доступно для текущего пользователя'
      );
    }
  };

  const emailHandler = () => {
    setEditingInput('email');
  };

  const socialNetworkHandler = () => {
    setEditingInput('socialNetwork');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContactsData({ ...contactsData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SmartHeader
        text="Контакты"
        icon={<Icon color="blue" icon="ContactsIcon" size="54" />}
      />
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.container}>
          <div className={styles.element_box}>
            <h2
              className={classNames(
                'text',
                'text_size_large',
                'text_type_regular',
                'm-0',
                styles.title
              )}
            >
              Эл. почта
            </h2>
            <input
              type="text"
              className={`${styles.input} ${
                editingInput === 'email'
                  ? styles.input_mode_edit
                  : styles.input_mode_link
              }`}
              onChange={onChange}
              name="email"
              value={contactsData.email || ''}
              readOnly={editingInput !== 'email'}
              onClick={(e) => {
                if (editingInput !== 'email') {
                  e.preventDefault();
                  window.location.href = `mailto:${contactsData.email}`;
                }
              }}
            />
          </div>
          {isEditAllowed && (
            <div
              onClick={emailHandler}
              className={
                editingInput === 'email'
                  ? styles.edit_box_hidden
                  : styles.edit_box
              }
            >
              <Icon color="blue" icon="EditIcon" />
              <p
                className={classNames(
                  'text',
                  'text_size_small',
                  'text_type_regular',
                  'm-0'
                )}
              >
                Изменить данные
              </p>
            </div>
          )}
        </div>
        <div className={styles.container}>
          <div className={styles.element_box}>
            <h2
              className={classNames(
                'text',
                'text_size_large',
                'text_type_regular',
                'm-0',
                styles.title
              )}
            >
              Страница VK
            </h2>
            <input
              type="text"
              className={`${styles.input} ${
                editingInput === 'socialNetwork'
                  ? styles.input_mode_edit
                  : styles.input_mode_link
              }`}
              onChange={onChange}
              name="socialNetwork"
              value={contactsData.socialNetwork || ''}
              readOnly={editingInput !== 'socialNetwork'}
              onClick={(e) => {
                if (editingInput !== 'socialNetwork') {
                  e.preventDefault();
                  window.location.href = `${contactsData.socialNetwork}`;
                }
              }}
            />
          </div>
          {isEditAllowed && (
            <div
              onClick={socialNetworkHandler}
              className={
                editingInput === 'socialNetwork'
                  ? styles.edit_box_hidden
                  : styles.edit_box
              }
            >
              <Icon color="blue" icon="EditIcon" />
              <p
                className={classNames(
                  'text',
                  'text_size_small',
                  'text_type_regular',
                  'm-0'
                )}
              >
                Изменить данные
              </p>
            </div>
          )}
        </div>
        {isEditAllowed && (
          <Button
            buttonType="primary"
            label="Сохранить"
            disabled={editingInput === null}
            type="submit"
          />
        )}
      </form>
    </>
  );
}
