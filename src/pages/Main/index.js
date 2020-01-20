import React from 'react';

import Product from '../../components/Product';

import { Container } from './styles';

const p1 = {
  nome: 'Xbox 360',
  inicio: '20/01/2020 14:00',
  img:
    'https://cdn.awsli.com.br/600x450/138/138431/produto/8516182/console-xbox-360-slim-4gb-microsoft-02799a11.jpg',
  preco: '25,60',
  tempo: '45',
  userAtual: 'eoliveira',
};

const p2 = {
  nome: 'Geladeira',
  inicio: '20/01/2020 14:30',
  img:
    'https://electrolux.vteximg.com.br/arquivos/ids/195789/geladeira-refrigerador-top-freezer-474l-branco-electrolux-TF56_Detalhe12.jpg?v=636995727982670000',
  preco: '13,60',
  tempo: '23',
  userAtual: 'giulio45',
};

const p3 = {
  nome: 'Fogão 5 Bocas',
  inicio: '20/01/2020 14:30',
  img:
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgJNrobqJ8e2GQBWYclSr9mV_z5jdi-QuDOCZldhyh2suFDZokCLlA1cJtDWAOP3PoeZr-blhxewG1i-MV5xsdKF57_PaBXRBnHjtbBUS32GO1Ii92s74m&usqp=CAc',
  preco: '5,97',
  tempo: '55',
  userAtual: 'ana765',
};

const p4 = {
  nome: 'Computador',
  inicio: '20/01/2020 14:30',
  img:
    'https://www.casasbahia-imagens.com.br/Informatica/Computadores/13863350/1187518370/computador-easypc-standard-intel-core-i5-34ghz-8gb-hd-3tb-monitor-215-windows-10-pacote-office-13863350.jpg',
  preco: '7,37',
  tempo: '36',
  userAtual: 'joao73',
};

const p5 = {
  nome: 'Mouse',
  inicio: '20/01/2020 14:30',
  img:
    'https://images3.kabum.com.br/produtos/fotos/101143/101143_1553692485_index_gg.jpg',
  preco: '5,37',
  tempo: '23',
  userAtual: 'guin0',
};

const p6 = {
  nome: 'Televisão 40"',
  inicio: '20/01/2020 14:30',
  img:
    'https://www.casanissei.com/media/catalog/product/cache/4b9589bf94df2671e932ab1ef3c559a0/a/i/aiwa_2.jpg',
  preco: '1,03',
  tempo: '12',
  userAtual: 'Julian1',
};

function Main() {
  return (
    <Container>
      <Product data={p1} />
      <Product data={p2} />
      <Product data={p3} />
      <Product data={p4} />
      <Product data={p5} />
      <Product data={p6} />
      <Product data={p1} />
      <Product data={p2} />
      <Product data={p1} />
      <Product data={p2} />
    </Container>
  );
}

export default Main;
