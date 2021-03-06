import styled from 'styled-components';

export const CompetitionPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 49%;
  border-radius: 10px;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  height: 360px;
  padding: 15px;

  @media (max-width: 768px) {
    width: 98%;
    margin-bottom: 20px;
    height: fit-content;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
  font-size: 20px;

  input {
    margin: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;
