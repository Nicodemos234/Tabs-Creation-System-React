import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  padding: 24px;
  margin: 21px;
  overflow-y: scroll;
`;

const Title = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
`;

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default Card;
