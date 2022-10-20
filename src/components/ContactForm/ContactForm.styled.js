import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }

  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.06em;
  }

  button {
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3px 15px;
    text-align: center;
    border: 0;
    border-radius: 5px;
    cursor: pointer;

    background-color: rgb(241, 188, 90);
    color: inherit;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
      rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    font-weight: 700;
    font-size: 12px;
    line-height: 1.9;
    letter-spacing: 0.06em;

    &:hover {
      background-color: rgb(52, 162, 212);
    }
  }
`;

export const FieldWrap = styled(Field)`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid rgb(241, 188, 90);
  border-radius: 4px;
  background-color: white;

  &::placeholder {
    color: rgba(52, 162, 212, 0.5);

    font-size: 16px;
    line-height: 1.25px;
  }

  :focus {
    outline: 1px solid rgb(52, 162, 212);
    border: 1px solid transparent;
  }
`;
