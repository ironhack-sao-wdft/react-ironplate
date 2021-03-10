import { Card, Button } from "react-bootstrap";

function ProductCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>R$ X,YZ</Card.Text>
        <Button variant="primary">See details!</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
