import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TableHeader from '../TableHeader.js/TableHeader';
import TableCell from '../TableCell/TableCell';
import { reducer } from '../../reducer/reducer';
import { actionTypes } from '../../reducer/action.types';
import { TinyColor } from '@ctrl/tinycolor';
import Paginator from '../Paginator/Paginator';

const OuterContainer = styled.div`
  max-width: ${(props) => props.width || '100%'};
  margin: 0 auto;
  padding: ${(props) => props.padding || ''};
  height: ${(props) => props.height || ''};
`;

const InnerContainer = styled(OuterContainer)`
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow-x: auto;
  padding: 0;
  min-height: ${(props) => props.height || ''};
  height: ${(props) => props.height || '100%'};
`;

const StyledTable = styled.table`
  width: 100%;
  border-radius: 4px;
  margin: 0 auto;
  border-collapse: collapse;
  tr {
    padding: 16px;
    border-bottom: 1px solid #d9d9d9;
  }
  position: relative;
`;

const StyledTbody = styled.tbody``;

const StyledTr = styled.tr`
  background-color: ${(props) =>
    props.striped ? (props.stripeBg ? props.stripeBg : '#f5f5f5') : 'white'};
  color: ${(props) =>
    props.striped && (props.stripeColor ? props.stripeColor : 'inherit')};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'inherit')};

  &:hover {
    background-color: ${(props) =>
      props.striped
        ? new TinyColor(props.stripeBg ? props.stripeBg : '#f5f5f5')
            .darken(5)
            .toString()
        : new TinyColor('#ffffff').darken(10).toString()};
  }
`;

const StyledTrHead = styled.tr`
  background-color: ${(props) => props.headerBg || '#f5f5f5'};
  color: ${(props) => props.headerColor || 'black'};
  cursor: pointer;
`;

const StyledTrFooter = styled(StyledTr)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Table = (props) => {
  const {
    columns,
    data,
    width,
    height,
    padding,
    stickyHeader,
    striped,
    stripeColor,
    stripeBg,
    headerBg,
    headerColor,
    editable,
    editComponents,
    onRowClick,
    onOrder,
    paginator,
    totalCount,
    perPageCount,
  } = props;
  const [state, dispatch] = useReducer(reducer, {
    columns: columns,
    rows: data,
    orderBy: 'position',
    order: 'ASC',
  });

  useEffect(() => {
    dispatch({
      type: actionTypes.POPULATE_DATA,
      payload: {
        rawData: data,
        columns: columns,
        paginator,
        totalCount,
        perPageCount,
      },
    });
  }, [columns, data, paginator, perPageCount, totalCount]);

  if (editable && !state.editAdded) {
    dispatch({ type: actionTypes.ADD_EDIT, payload: { ...editComponents } });
  }

  /**
   * Creating a new array with the keys allows us to make sure to render the <td>s in the same order as the <th>s
   */
  const generateColumnOrder = () => {
    return state.columns.map((column) => column.headerFor);
  };

  /**
   * Function to reorder the rows displayed in the table. It get a 'columName' as argument, and does the ordering
   * based on that column.
   */
  const orderRowsBy = (columnName) => {
    return dispatch({
      type: actionTypes.ORDER_BY,
      payload: {
        orderBy: columnName,
        order: state.order === 'ASC' ? 'DESC' : 'ASC',
        onOrder: onOrder,
      },
    });
  };

  const changePage = (targetPage) => {
    console.log(targetPage);
    return dispatch({
      type: actionTypes.CHANGE_PAGE,
      payload: {
        targetPage,
      },
    });
  };

  /**
   * Generates the layout for the Table - creates all the <tr>, <th> and <td> elements and styles them based on props.
   */
  const generateTableLayout = () => {
    const order = generateColumnOrder();
    return (
      <>
        <StyledTbody>
          <StyledTrHead
            headerBg={headerBg}
            headerColor={headerColor}
            data-testid="table-header-row"
          >
            {order &&
              order.map((item, idx) => {
                const orderedData = state.columns.find(
                  (o) => o.headerFor === item
                );
                return (
                  <TableHeader
                    key={orderedData.headerFor}
                    orderedData={orderedData}
                    stickyHeader={stickyHeader}
                    index={idx}
                    length={order.length}
                    orderRowsBy={orderRowsBy}
                    order={state.order}
                    orderBy={state.orderBy}
                  >
                    {orderedData.title}
                  </TableHeader>
                );
              })}
          </StyledTrHead>

          {state.rows.map((row, rowIdx) => {
            return (
              <StyledTr
                data-testid="table-data-row"
                key={row.id}
                id={row.id}
                striped={striped && rowIdx % 2 !== 0}
                stripeBg={stripeBg}
                stripeColor={stripeColor}
                onClick={onRowClick ? () => onRowClick(row) : null}
              >
                {order.map((item, itemIdx) => {
                  const orderedData = state.columns.find(
                    (o) => o.headerFor === item
                  );
                  return (
                    <TableCell
                      orderedData={orderedData}
                      key={Math.random()}
                      rowIndex={rowIdx}
                      rowLength={data.length}
                      dataIndex={itemIdx}
                      dataLength={order.length}
                    >
                      {orderedData.component
                        ? orderedData.component(row)
                        : row[item]}
                    </TableCell>
                  );
                })}
              </StyledTr>
            );
          })}
        </StyledTbody>
      </>
    );
  };

  return (
    <OuterContainer width={width} height={height} padding={padding}>
      <InnerContainer width={width}>
        <StyledTable width={width} data-testid="table">
          {generateTableLayout()}
        </StyledTable>
      </InnerContainer>
      {paginator && (
        <Paginator currentPage={state.currentPage} changePage={changePage} />
      )}
    </OuterContainer>
  );
};

Table.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  striped: PropTypes.bool,
  stripeBg: PropTypes.string,
  stripeColor: PropTypes.string,
  onRowClick: PropTypes.func,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      headerFor: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      width: PropTypes.string,
      align: PropTypes.string,
      headerBackground: PropTypes.string,
      textColor: PropTypes.string,
      headerStyle: PropTypes.shape({}),
      cellStyle: PropTypes.shape({}),
      component: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  editable: PropTypes.bool,
  editComponents: PropTypes.shape({
    onEdit: PropTypes.shape({
      icon: PropTypes.func,
      callBack: PropTypes.func,
    }),
    onAdd: PropTypes.shape({
      icon: PropTypes.func,
      callBack: PropTypes.func,
    }),
    onDelete: PropTypes.shape({
      icon: PropTypes.func,
      callBack: PropTypes.func,
    }),
  }),
  onOrder: PropTypes.func,
  paginator: PropTypes.bool,
  totalCount: PropTypes.number,
  perPageCount: PropTypes.number,
};

Table.defaultProps = {
  width: '100%',
  columns: [
    {
      headerFor: '',
      title: '',
      component: null,
      options: {},
    },
  ],
  data: [],
  editable: false,
  onOrder: null,
  paginator: false,
  totalCount: null,
  perPageCount: null,
};

export default Table;
