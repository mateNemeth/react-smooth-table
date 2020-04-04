import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTd = styled.td`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.align || 'left'};
  font-size: 14px;
  border-collapse: collapse;
  background-color: inherit;
  padding: 16px;
`;

const TableCell = ({
  orderedData,
  rowIndex,
  dataIndex,
  rowLength,
  dataLength,
  ...props
}) => {
  /**
   * A function that adds 4px border radius on the bottom left/right corner if the <td> element
   * is the first or last item in the row, and the parent <tr> is the last row in the table,
   * along with any other passed down styles to all the <td> elements
   */
  const createTdStyles = () => {
    if (rowIndex === rowLength - 1 && dataIndex === 0) {
      return {
        ...orderedData.cellStyle,
        borderBottomLeftRadius: '4px'
      };
    }

    if (rowIndex === dataLength - 1 && dataIndex === dataLength - 1) {
      return {
        ...orderedData.cellStyle,
        borderBottomRightRadius: '4px'
      };
    }

    return { ...orderedData.cellStyle };
  };

  return (
    <StyledTd
      data-testid="table-data-cell"
      width={orderedData.width}
      align={orderedData.align}
      style={createTdStyles()}
    >
      {props.children}
    </StyledTd>
  );
};

TableCell.propTypes = {
  orderedData: PropTypes.shape({
    width: PropTypes.string,
    align: PropTypes.string,
    cellStyle: PropTypes.shape({})
  }),
  rowIndex: PropTypes.number,
  dataIndex: PropTypes.number,
  rowLength: PropTypes.number,
  dataLength: PropTypes.number
};

export default TableCell;
