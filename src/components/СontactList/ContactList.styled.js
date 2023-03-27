import styled from '@emotion/styled';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ContactsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const DeleteButton = styled.button`
  width: 30%;
`;
export { ContactsList, ContactsItem, DeleteButton };
