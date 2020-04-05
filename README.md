# React-Smooth-Table

Fast and easily configurable tables in React. Has some built-in, easy to use APIs, but also fully configurable.

## Table of Contents

- [Installation](#installation)
- [Basic usage](#basic-usage)
- [Customization](#customization) - [Advanced styling](#advanced-styling) - [Full style cusomization](#full-styling)
- [Editing (add, delete, edit rows)](#editing)

## Installation

```sh
npm install [--save] react-smooth-table
```

## Basic usage

Simple example:

```jsx
import React from 'react';
import { Table } from 'react-smooth-table';

const TableComponent = () => {
  const columns = [
    { headerFor: 'name', title: 'Name' },
    { headerFor: 'phoneNum', title: 'Phone number' },
  ];

  const data = [
    { name: 'John Doe', phoneNum: '123456789' },
    { name: 'Jane Doe', phoneNum: '987654321' },
  ];

  return <Table columns={columns} data={data} />;
};
```

So in the most basic use-case the Table component takes two props: **columns** and **data**. Both of them is an array of objects.
**Note**: The value for the _headerFor_ key must be the same as the key of the data which you want to display.  
**Note**: Any key-values in data which doesn't have a _headerFor_ in the columns won't be displayed.

## Customization

The Table component can take the following props:
|Prop|Type|Explanation|
|----|----|-----------|
|height|string (eg: '100%'|The height of the table.|
|width|string (eg: '500px'|The width of the table|
|padding|string (eg: '1em')|Padding between the table and its outer container|
|stickyHeader|boolean|If true, the header stays at the top when scrolling|
|striped|boolean|If true, every second row has a darker color (can be customized)|
|stripeColor|string (eg: '#f0f0f0")|The color of the text in the striped rows. Can be any valid css color value|
|stripeBg|string (eg: 'silver')|The backgroundcolor of the striped rows. Can be any valid css color value|
|headerColor|string (eg:'rgba(0, 0, 0, 0.5)'|Textcolor of the header. Can be any valid css color value.|
|headerBg|string|Bacgkround color of the header. Can be any valid css color value.|
|editable|boolean|If true, it allows the access to the **editComponents** prop|
|editComponents|object|Pass in callbacks and components to the **edit/add/delete** operations [examples here](#edit-examples)|
|onRowClick|function|You can pass in a callback which takes the data of the row that's been clicked on|
|onOrder|function|A callback that's fired when the ordering is changed by clicking on one of the header items. It gets 2 arguments: **order** and **orderBy**. Order can be one of **'ASC'** or **'DESC'**, and orderBy is the headerFor of the column|

### Advanced styling

You can also style a single column, by passing in more arguments into the respective column object, for example:

```jsx
const columns = [
  { headerFor: 'id', title: 'Identification', width: '50px', align: 'right' },
];
```

Possible props for the column object:  
|Prop|Type|Explanation|
|-----|------|-----|
|width|string|Width of the column. **Note**: can't be smaller than the text in the header|
|align|string|Text-alignment for the column|
|headerBackground|string|Custom background color for the header in that column|
|textColor|string|Text-color for the header of that column|
|headerStyle|object|Style object for the header of that column.|
|cellStyle|object|Style object for every td in that column|

## Editing

There are 3 basic "editing" options: adding, removing, and editing the table rows. You can turn this option on by passing **editable** prop to the Table component, and also an **editComponents** object, which defines the behaviour and the component for the specific buttons. Keep in mind, that _component_ is optional, but passing in a _callBack_ is **required**.

```jsx
const editComponents = {
  onEdit: {
    component: <WhateverCustomButtonOrIcon />,
    callBack: (rowData) => {
      // Talk to the backend here maybe.
    };
  },
  onDelete: {
    component: <WhateverCustomButtonOrIcon />,
    callBack: (rowData) => {
      // Talk to the backend here maybe.
    };
  },
  onAdd: {
    component: <WhateverCustomButtonOrIcon />,
      callBack: (rowData) => {
        // Talk to the backend here maybe.
      };
  }
};
```

**Note**: Each one of these editing options are optional, you can have either one, or all of them as you wish.
