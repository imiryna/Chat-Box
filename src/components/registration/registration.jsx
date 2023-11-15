import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'Redux/authThunk';
import {
  Container,
  FormCss,
  InputCss,
  LabelCss,
  Button,
} from './registration.styled';

import { Link } from 'react-router-dom';

export const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <Container>
      <FormCss onSubmit={handleSubmit(onSubmit)}>
        <LabelCss>
          <span>Email</span>
          <InputCss {...register('email', { required: true })} type="email" />
          {errors.email && <span>This field is required</span>}
        </LabelCss>
        <LabelCss>
          <span>Name</span>
          <InputCss {...register('name', { required: true })} type="text" />
          {errors.name && <span>This field is required</span>}
        </LabelCss>
        <LabelCss>
          <span>Password</span>
          <InputCss
            {...register('password', { required: true, minLenght: 6 })}
            type="password"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </LabelCss>

        <Button type="submit">Sign up</Button>
        <Link to="/login">Already have an account? Login!</Link>
      </FormCss>
    </Container>
  );
};
