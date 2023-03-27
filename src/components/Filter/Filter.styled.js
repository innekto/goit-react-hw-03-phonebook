import styled from '@emotion/styled';

const FilterLabel = styled.label`
  display: inline-flex;
  flex-direction: column;
  margin: auto;
  width: 200px;
  gap: 6px;
`;

const FilterInput = styled.input`
  padding: 4px 8px;
  font-size: 16px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #246572;
`;

const FilterTitle = styled.p`
  font-size: 16px;
  text-align: center;
`;
export { FilterLabel, FilterInput, FilterTitle };
