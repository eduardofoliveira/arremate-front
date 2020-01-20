import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #c3c3c3;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  background-color: #fff;

  h1 {
    text-align: center;
  }

  h2,
  h3 {
    margin: 0;
  }

  img {
    height: 200px;
  }

  .bottom_box {
    display: flex;
    align-items: center;
    justify-content: space-around;

    min-width: 100%;

    h1 {
      -color: red;
      margin: 0;
    }
  }

  .bottom_detail p {
    margin-top: 5px;
    text-align: center;
    color: #c3c3c3;
    font-weight: bold;
  }
`;

export const Contagem = styled.h1`
  color: ${props => {
    if (props.tempo < 10) {
      return 'red';
    }
    if (props.tempo < 20) {
      return '#fbbd08';
    }
    return 'black';
  }};
`;
