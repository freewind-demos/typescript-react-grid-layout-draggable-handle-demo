//import * as React from 'react'
import React from 'react'
import GridLayout, {Layout} from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import './index.css';

class Hello extends React.Component {
  render() {
    const layout: Layout[] = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2},
    ]
    return <div>
      <h1>Hello React</h1>
      <GridLayout className='layout' layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key='a'>A</div>
        <div key='b'>B</div>
        <div key='c'>C</div>
      </GridLayout>
    </div>
  }
}

export default Hello
