import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paginator = ({ currentPage, changePage, container }) => {
  const prevPage = () => {
    changePage(currentPage - 1);
  };

  const nextPage = () => {
    changePage(currentPage + 1);
  };

  return (
    <Root width={container?.clientWidth}>
      <div>
        <span style={{ marginRight: '8px' }} onClick={prevPage}>
          {'<'}
        </span>
        <span>{currentPage}</span>
        <span style={{ marginLeft: '8px' }} onClick={nextPage}>
          {'>'}
        </span>
      </div>
    </Root>
  );
};

export default Paginator;

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

const Root = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 15px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: white;
  height: 30px;
  margin-top: auto;

  & div {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;
