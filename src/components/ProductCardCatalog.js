import { Card, Button } from "react-bootstrap";

function ProductCardCatalog(props) {
  return (
    <Card className={`${props.className} col-lg-3 col-12`} style={{ width: "18rem"}}>
      <Card.Img
        variant="top"
        src={props.picture}
        style={{height: '170px', objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>R${props.price}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">See details!</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCardCatalog;