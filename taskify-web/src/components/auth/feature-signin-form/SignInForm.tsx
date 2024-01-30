import { Controller, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import { Input } from '@/components/commons/ui-input/Input';
import PasswordInput from '../ui-password-input/PasswordInput';
import Button from '@/components/commons/ui-button/Button';
import styles from './SignInForm.module.scss';
import { TEXT } from './constant';

const cx = classNames.bind(styles);

export default function SignInForm() {
  const { watch, control } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
  });

  const isSubmit = true;
  return (
    <form className={cx('form')}>
      <label className={cx('inputContainer')}>
        {TEXT.email.label}
        <Controller
          control={control}
          name="email"
          defaultValue=""
          rules={{
            required: TEXT.email.message.required,
            pattern: {
              value: /\S@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: TEXT.email.message.pattern,
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder={TEXT.email.message.required}
              hasError={Boolean(fieldState.error)}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </label>
      <label className={cx('inputContainer')}>
        {TEXT.password.label}
        <Controller
          control={control}
          name="password"
          defaultValue=""
          rules={{
            required: TEXT.password.message.required,
            pattern: {
              value: /^(?=.*[a-zA-Z0-9]).{8,25}$/,
              message: TEXT.password.message.pattern,
            },
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              placeholder={TEXT.password.message.required}
              hasError={Boolean(fieldState.error)}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </label>
      <div className={cx('buttonContainer')}>
        <Button
          disabled={!watch('email') || !watch('password')}
          size="large"
          isSubmitType={isSubmit}
          onClick={() => {}}
        >
          {TEXT.button}
        </Button>
      </div>
    </form>
  );
}
