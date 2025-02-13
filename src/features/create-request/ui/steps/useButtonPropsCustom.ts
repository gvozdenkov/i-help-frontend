import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  changeCurrentStep,
  changeStepDecrement,
  changeStepIncrement,
} from 'features/create-request/model';

type usePropsButtonCustomType = {
  label: string;
  onClick: () => void;
  backlabel?: string;
  backonClick?: () => void;
};

const usePropsButtonCustom = (): usePropsButtonCustomType => {
  const dispatch = useAppDispatch();

  const { isTypeEdit } = useAppSelector((state) => state.createRequest);

  const handleNextStepClick = () => {
    dispatch(changeStepIncrement());
  };

  const handlePreviousStepClick = () => {
    dispatch(changeStepDecrement());
  };

  const handleSubmitClick = () => {
    dispatch(changeCurrentStep(4));
  };
  const propsButtonDefault = {
    label: 'Продолжить',
    onClick: handleNextStepClick,
    backlabel: 'Вернуться',
    backonClick: handlePreviousStepClick,
  };

  const propsEditButton = {
    label: 'сохранить',
    onClick: handleSubmitClick,
  };
  const propsButtonCustom = isTypeEdit ? propsEditButton : propsButtonDefault;

  return propsButtonCustom;
};

export default usePropsButtonCustom;
