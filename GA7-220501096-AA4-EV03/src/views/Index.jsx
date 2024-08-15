import {
  Row,
  Container,
  Col,
  InputGroupText,
  InputGroup,
  Input,
} from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { PokeTarjeta } from "../components/PokeTarjeta";

export function Index() {
  const [pokemones, setPokemones] = useState([]);
  const [offset, setoffset] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    getPokemones(offset);
  }, []);

  const getPokemones = async (o) => {
    const link =
      "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;

    axios.get(link).then(async (response) => {
      const respuesta = response.data;
      console.log(respuesta.results);
    });
  };

  return (
    <Container className="shadow bg-dark mt-3 rounded">
      <Row>
        <Col>
          <InputGroup className="mt-3 mb-3 shadow">
            <InputGroupText>
              <i className="fa-solid fa-search"></i>
            </InputGroupText>
            <Input placeholder="Buscar pokemon"></Input>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        {pokemones.map((pok, i) => {
          <PokeTarjeta pok={pok} key={i} />;
        })}
      </Row>
    </Container>
  );    
}
