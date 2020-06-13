import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/44125293?s=460&v=4"
            alt="André Vital"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/44125293?s=460&v=4"
            alt="André Vital"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/44125293?s=460&v=4"
            alt="André Vital"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
