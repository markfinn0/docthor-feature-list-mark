import React from 'react';
import { Container, Button } from 'react-bootstrap';

const ListIndicators = ({ fileList, onDeleteIndicator }) => {
  return (
    <Container style={styles.container}>
      {fileList.map((fileName, index) => (
        <div key={index} style={styles.innerContainer}>
          <span>{fileName}</span>
          <Button variant="outline-light" style={styles.deleteButton} onClick={() => onDeleteIndicator(index)}>
            X
          </Button>
        </div>
      ))}
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
  },

  innerContainer: {
    backgroundColor: '#ff6200',
    borderRadius: '8px',
    padding: '8px',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    wordBreak: 'break-word',
    color: 'white',
    fontWeight: 'bold',
  },

  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
};

export default ListIndicators
