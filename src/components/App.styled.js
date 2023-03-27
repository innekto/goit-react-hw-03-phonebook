import styled from '@emotion/styled';

const Section = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: 400px;
  background-color: white;
  padding: 15px;
`;

const ContactsWrap = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h1`
  font-size: 38px;
  text-align: center;
  margin-bottom: 12px;
`;
const SectionSubTitle = styled.h1`
  font-size: 28px;
  text-align: center;
  // margin-bottom: 12px;
`;
export { Section, ContactsWrap, SectionTitle, SectionSubTitle };
