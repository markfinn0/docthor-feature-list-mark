import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListIndicators from './List_groups/List_indicators';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Button } from 'react-bootstrap';

const App = () => {
  const [userInputIndicador, setUserInputIndicador] = useState('');
  const [userInputDescricao, setUserInputDescricao] = useState('');
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleUserInputIndicador = (event) => {
    setUserInputIndicador(event.target.value);
  };

  const handleUserInputDescricao = (event) => {
    setUserInputDescricao(event.target.value);
  };

  const handleListIndicators = () => {
    // Processa o userInput e adiciona à lista
    const indicadorList = userInputIndicador.split(',').map(variable => variable.trim());
    const descricaoList = userInputDescricao.split(',').map(variable => variable.trim());

    // Combina Indicador e Descrição
    const combinedList = indicadorList.map((indicador, index) => `${indicador}: ${descricaoList[index]}`);
    const updatedList = [...fileList, ...combinedList];
    setFileList(updatedList);
    setLoading(false);
  };

  const handleDownloadMarkdown = () => {
    // Cria o conteúdo do arquivo Markdown
    const markdownContent = `# INDICADORES\n\n${fileList.map(item => `- ${item}`).join('\n')}`;

    // Cria um novo Blob
    const blob = new Blob([markdownContent], { type: 'text/markdown' });

    // Cria uma URL do Blob
    const url = window.URL.createObjectURL(blob);

    // Cria um link para o arquivo
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'indicadores.md');

    // Adiciona o link ao corpo do documento
    document.body.appendChild(link);

    // Aciona o clique no link para iniciar o download
    link.click();

    // Remove o link do corpo do documento
    document.body.removeChild(link);

    // Limpa a URL do objeto
    window.URL.revokeObjectURL(url);
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', width: '80%', margin: '0 auto', marginTop: '10vh' }}>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Control placeholder="Coloque Indicador" value={userInputIndicador} onChange={handleUserInputIndicador} />
          </Col>
        </Row>
        <Row className="mb-3">
          <InputGroup>
            <InputGroup.Text>Descrição Indicador</InputGroup.Text>
            <Form.Control as="textarea" aria-label="Descrição Indicador" value={userInputDescricao} onChange={handleUserInputDescricao} />
          </InputGroup>
        </Row>
      </Form>
      <Button variant="primary" onClick={handleListIndicators} className="mb-2 mx-auto" style={{ width: '30%', alignItems: "center" }}>
        Adicionar Indicador
      </Button>
      <Button variant="success" onClick={handleDownloadMarkdown} className="mb-2 mx-auto" style={{ width: '30%', alignItems: "center" }}>
        Download Markdown
      </Button>
      {!loading && (
        <ListIndicators fileList={fileList} />
      )}
    </Container>
  );
}

export default App;
