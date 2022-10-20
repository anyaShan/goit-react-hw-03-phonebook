import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  label {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.2;
    letter-spacing: 0.06em;
  }

  input {
    flex-grow: 1;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 4px;
    background-color: white;

    :focus {
      outline: 1px solid rgb(241, 188, 90);
      border: 1px solid transparent;
    }
  }
`;
