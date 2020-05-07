import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paginator = ({ currentPage, changePage }) => {
  const Root = styled.tfoot`
    display: table-footer-group;
    /* position: fixed;
    bottom: 0; */
  `;

  const prevPage = () => {
    changePage(currentPage - 1);
  };

  const nextPage = () => {
    changePage(currentPage + 1);
  };
  return (
    <Root>
      <tr>
        <td colSpan="999">
          <div style={{ width: '100%' }}>
            <span style={{ marginRight: '8px' }} onClick={prevPage}>
              {'<'}
            </span>
            <span>{currentPage}</span>
            <span style={{ marginLeft: '8px' }} onClick={nextPage}>
              {'>'}
            </span>
          </div>
        </td>
      </tr>
    </Root>
  );
};

export default Paginator;

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};
