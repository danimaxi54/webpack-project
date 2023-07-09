import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import Button from 'shared/ui/Button/Button';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from 'shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelector';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const { t } = useTranslation('article-details');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const {
        className,
        onSendComment,
    } = props;

    const onCommentTextChange = (value: string) => {
        dispatch(addCommentFormActions.setText(value));
    };

    const onSendHandler = () => {
        onCommentTextChange('');
        onSendComment(text || '');
    };

    if (error) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                className={classNames(cls.AddCommentForm, {}, [className])}
                justify="between"
                max
            >
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментариев')}
                    value={text}
                    onChange={onCommentTextChange}
                />

                <Button onClick={onSendHandler}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;