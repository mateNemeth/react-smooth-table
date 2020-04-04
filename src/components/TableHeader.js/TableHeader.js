import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTh = styled.th`
  border-collapse: collapse;
  padding: 16px;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.textColor || 'inherit'};
  width: ${props => props.width || 'auto'};
  min-width: ${props => props.width || ''};
  text-align: ${props => props.align || 'left'};
  background-color: ${props => props.headerBackground || 'inherit'};
  white-space: nowrap;
  text-overflow: ellipsis;
  position: ${props => (props.stickyHeader ? 'sticky' : 'inherit')};
  top: 0;
`;

const OrderDown = styled.span`
  margin-left: 2px;
`;

const OrderUp = styled.span`
  margin-left: 2px;
`;

const TableHeader = ({
  orderedData,
  stickyHeader,
  index,
  length,
  orderRowsBy,
  order,
  orderBy,
  ...props
}) => {
  /**
   * A function that adds 4px border radius on the top left/right corner if the <th> element
   * is the first or last item in the row, along with any other passed down styles to all the <th> elements
   */
  const createThStyles = () => {
    if (index === 0) {
      return {
        ...orderedData.headerStyle,
        borderTopLeftRadius: '4px'
      };
    }

    if (index === length - 1) {
      return {
        ...orderedData.headerStyle,
        borderTopRightRadius: '4px'
      };
    }

    return { ...orderedData.headerStyle };
  };

  return (
    <StyledTh
      data-testid="table-header-cell"
      width={orderedData?.width}
      align={orderedData?.align}
      headerBackground={orderedData?.headerBackground}
      textColor={orderedData?.textColor}
      stickyHeader={stickyHeader}
      style={createThStyles()}
      onClick={() => orderRowsBy(orderedData.headerFor)}
    >
      {props.children}
      {typeof props.children === 'string' && (
        <>
          {orderBy === orderedData.headerFor && order === 'ASC' && (
            <OrderDown>▲</OrderDown>
          )}
          {orderBy === orderedData.headerFor && order === 'DESC' && (
            <OrderUp>▼</OrderUp>
          )}
        </>
      )}
    </StyledTh>
  );
};

TableHeader.propTypes = {
  orderedData: PropTypes.shape({
    width: PropTypes.string,
    align: PropTypes.string,
    headerBackground: PropTypes.string,
    textColor: PropTypes.string,
    style: PropTypes.shape(),
    headerFor: PropTypes.string
  }),
  stickyHeader: PropTypes.bool,
  index: PropTypes.number,
  length: PropTypes.number,
  orderRowsBy: PropTypes.func
};

export default TableHeader;
