import React from 'react';
import { Container } from 'react-bootstrap';

const ListIndicators = ({ fileList }) => {
  return (
    <Container style={styles.container}>
      {fileList.map((fileName, index) => (
        <span key={index} style={styles.innerContainer}>
          {fileName}
        </span>
      ))}
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto', // Adicionando overflow para lidar com o conteúdo que ultrapassa o contêiner
  },

  innerContainer: {
    backgroundColor: '#ff6200',
    borderRadius: '8px',
    padding: '8px',
    marginBottom: '8px',
    display: 'inline-block',
    wordBreak: 'break-word', // Quebra de palavra para evitar que o texto ultrapasse a caixa
    color:'White',
    fontWeight:'bold'

  },
};

export default ListIndicators;
