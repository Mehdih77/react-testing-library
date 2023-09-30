import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
  const [tsChecked, setTsChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tsChecked}
          label={checkboxLabel}
          onChange={(e) => setTsChecked(e.target.checked)}
          // onChange={() => setTsChecked(!tsChecked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tsChecked}>
        Confirm Order
      </Button>
    </Form>
  );
}
