import { Card, Button } from "react-bootstrap";

function ProductCardCatalog(props) {
  return (
    <div className="col-lg-3 col-12 m-3" key={props.key}>
      <Card style={{ width: "18rem", height: "375px" }}>
        <Card.Img
          variant="top"
          src={props.picture}
          style={{ height: "170px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>R${props.price}</Card.Text>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">See details!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCardCatalog;
