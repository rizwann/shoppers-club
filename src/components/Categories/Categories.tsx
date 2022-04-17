import styled from "styled-components";
import { categories } from "../../fakeData";
import Category from "../Category/Category";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default Categories;
