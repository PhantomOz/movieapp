import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MovieContext } from "../store/MovieContext";
import { useNavigate } from "react-router-dom";

const AddMovies = () => {
  const [movies, setMovie] = useContext(MovieContext);
  const initialState = {
    id: movies.length,
    title: "",
    artist: "",
    price: 0,
  };
  const [inputValue, setInputValue] = useState({ ...initialState });

  // We using our used navigate here
  const navigate = useNavigate();

  //To handle changes in our form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  //to submit our form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setMovie([...movies, inputValue]);
    navigate("/");
  };
  return (
    <div className="container p-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            type="text"
            value={inputValue.title}
            placeholder="Matrix"
            onChange={handleChange}
            name="title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Director</Form.Label>
          <Form.Control
            type="text"
            value={inputValue.director}
            placeholder="Vin Diesel"
            onChange={handleChange}
            name="artist"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={inputValue.price}
            placeholder="100"
            onChange={handleChange}
            name="price"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddMovies;
