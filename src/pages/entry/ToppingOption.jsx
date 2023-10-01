import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function ToppingOption({ name, imagePath, updateItemCount }) {
  const handleChange = (event) => {
    updateItemCount(name, event.target.value);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{
          marginTop: "10px",
        }}>
        <Form.Label column xs="6" style={{ textAlign: "center" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            onChange={handleChange}
            type="number"
            defaultValue={0}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
