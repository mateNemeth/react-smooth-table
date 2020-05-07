import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Paginator = ({ currentPage, changePage }) => {
  const prevPage = () => {
    changePage(currentPage - 1);
  };

  const nextPage = () => {
    changePage(currentPage + 1);
  };
  return (
    <Root>
      <span onClick={prevPage}>{'<'}</span>
      <span onClick={nextPage}>{'>'}</span>
    </Root>
  );
};

export default Paginator;

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};
