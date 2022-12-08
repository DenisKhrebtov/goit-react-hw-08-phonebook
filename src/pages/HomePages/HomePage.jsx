import { Container, Title } from './HomePage.styled';

export default function HomePage() {
  return (
    <Container>
      <Title>
        Phonebook manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
