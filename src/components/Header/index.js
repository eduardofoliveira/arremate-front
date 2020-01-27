import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

import { Container } from './styles';

import logo from '../../assets/click-logo.png';
import history from '../../services/history';

export default function Header() {
  const [activeItem, setActiveItem] = useState('produtos');

  const handleItemClick = name => setActiveItem(name);

  return (
    <Container>
      <Menu stackable>
        <Menu.Item>
          <img src={logo} alt="logo" />
        </Menu.Item>

        <Menu.Item
          name="produtos"
          active={activeItem === 'produtos'}
          onClick={(e, { name }) => {
            handleItemClick(name);
            history.push('/');
          }}
        >
          Produtos
        </Menu.Item>

        <Menu.Item
          name="contato"
          active={activeItem === 'contato'}
          onClick={(e, { name }) => {
            handleItemClick(name);
            history.push('/contato');
          }}
        >
          Contato
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="comprar"
            active={activeItem === 'comprar'}
            onClick={(e, { name }) => {
              handleItemClick(name);
              history.push('/comprar');
            }}
          >
            Comprar
          </Menu.Item>
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={(e, { name }) => {
              handleItemClick(name);
              history.push('/login');
            }}
          >
            Entrar
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
}
