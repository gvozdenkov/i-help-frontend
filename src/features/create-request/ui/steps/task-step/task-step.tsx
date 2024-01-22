import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  setDescriptionForTask,
  changeStepDecrement,
  changeStepIncrement,
  setCategory,
} from 'features/create-request/model';
import { Button } from 'shared/ui/button';
import { TextArea } from 'shared/ui/text-area';
import Dropdown, { Option } from '../../../../../shared/ui/dropdown';

import styles from './task-step.module.css';
import usePropsButtonCustom from '../useButtonPropsCustom';
import { useGetTasksByStatusQuery } from 'services/tasks-api';
import { Tooltip } from 'shared/ui/tooltip';
import { CloseCrossIcon } from 'shared/ui/icons/close-cross-icon';

interface ITaskStepProps {
  isMobile?: boolean;
}
interface Coords {
  right: number;
  top: number;
}
export const TaskStep = ({ isMobile }: ITaskStepProps) => {
  const { descriptionForTask, categories, category, isTypeEdit } =
    useAppSelector((state) => state.createRequest);

  const dispatch = useAppDispatch();

  const optionsForSelect = categories?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));
  // console.log(optionsForSelect);
  const handleTaskValueChange = (item: Option) => {
    dispatch(setCategory(item));
  };

  const handleTaskDescValueChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(222);

    dispatch(setDescriptionForTask(e.target.value));
  };

  const disabledBtn = () => {
    if (descriptionForTask.length <= 5 || descriptionForTask.length > 300) {
      return true;
    }
    if (category.value === '' && category.label === '') {
      return true;
    }
  };

  const propsButton = usePropsButtonCustom();

  // const handlePopupOpen = () => {
  //   if (!isOpen) {
  //     getCoords();
  //   }
  //   setIsOpen((prev) => !prev);
  // };

  const disabledBtn = () => {
    if (descriptionForTask.length <= 5 || descriptionForTask.length > 300) {
      return true;
    }
    if (category.value === '' && category.label === '') {
      return true;
    }
  };

  // useEffect(() => {
  //   window.addEventListener('resize', getCoords);

  //   return () => {
  //     window.removeEventListener('resize', getCoords);
  //   };
  // }, []);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.taskContainer}>
        {isMobile ? (
          <>
            <p
              className={classNames(
                'text',
                'text_type_regular ',
                'm-0',
                styles.task
              )}
            >
              Дело
            </p>
            <div className={styles.headerWrapper} />
            <Dropdown
              selected={category}
              label="Выберите тип задачи"
              placeholder="Выберите тип задачи"
              onChange={handleTaskValueChange}
              items={optionsForSelect}
              extClassName={styles.select}
            />

            <TextArea
              value={descriptionForTask}
              label="Опишите задачу"
              name="task"
              placeholder="Например: Помогите выгулять собаку."
              onChange={handleTaskDescValueChange}
              extClassName={styles.textarea}
              maxLength={300}
            />
          </>
        ) : (
          <>
            <Dropdown
              selected={category}
              label="Выберите тип задачи"
              placeholder="Выберите тип задачи"
              onChange={handleTaskValueChange}
              items={optionsForSelect}
              extClassName={styles.select}
            />
            {category.value === '' && category.label === '' && (
              <p className={styles.messageAlert}>Выберите тип задачи</p>
            )}
            <TextArea
              value={descriptionForTask}
              label="Опишите задачу"
              name="task"
              placeholder="Например: Помогите выгулять собаку."
              onChange={handleTaskDescValueChange}
              extClassName={styles.textarea}
              maxLength={300}
            />
            {/* {isOpen && (
              <Tooltip
                visible
                changeVisible={() => setIsOpen(false)}
                elementStyles={{
                  position: 'absolute',
                  top: `${popupPosion?.top}px`,
                  right: `${popupPosion?.right}px`,
                }}
              >
                <div className={styles.closeWrapper}>
                  <CloseCrossIcon
                    className={styles.closeIcon}
                    size="14"
                    color="blue"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                Здесь будет текст
              </Tooltip>
            )} */}
          </>
        )}
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.alertWrapper}>
          {descriptionForTask.length <= 5 && (
            <p className={styles.messageAlert}>Добавьте описание задачи</p>
          )}
          {category.value === '' && category.label === '' && (
            <p className={styles.messageAlert}>Выберите тип задачи</p>
          )}
        </div>
        {!isTypeEdit && (
          <Button
            buttonType="secondary"
            label={propsButton.label}
            onClick={propsButton.onClick}
            extClassName={styles.prevButton}
          />
        )}
        <Button
          disabled={disabledBtn()}
          buttonType="primary"
          label={propsButton.label}
          onClick={propsButton.onClick}
        />
      </div>
    </div>
  );
};
