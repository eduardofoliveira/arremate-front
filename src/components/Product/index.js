import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import { Container, Contagem } from './styles';

export default function Product({ data }) {
  const { nome, inicio, img, preco, userAtual } = data;

  const [tempo, setTempo] = useState(data.tempo);

  const timeout = setTimeout(() => {
    setTempo(tempo - 1);
  }, 1000);

  useEffect(() => {
    if (tempo === 0) {
      clearTimeout(timeout);
    }
  }, [tempo, timeout]);

  const handleLance = () => {
    clearTimeout(timeout);
    setTempo(30);
  };

  return (
    <Container>
      <h3>{nome}</h3>
      <h2>{inicio}</h2>
      <img src={img} alt={nome} />
      <h2>R$: {preco}</h2>
      <div className="bottom_box">
        <Contagem tempo={tempo}>{tempo}</Contagem>
        <div className="bottom_detail">
          <Button
            disabled={tempo < 1}
            type="button"
            color="green"
            onClick={() => handleLance()}
          >
            Lance
          </Button>
          <p>{userAtual}</p>
        </div>
      </div>
    </Container>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    inicio: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,
    userAtual: PropTypes.string.isRequired,
  }).isRequired,
};
