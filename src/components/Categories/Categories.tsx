import styled from "styled-components";
import { categories } from "../../fakeData";
import { mobile } from "../../responsive";
import Category from "../Category/Category";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", padding: "0px" })}
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
