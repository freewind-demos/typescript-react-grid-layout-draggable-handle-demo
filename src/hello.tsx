//import * as React from 'react'
import React, {useState} from 'react'
import GridLayout, {Layout} from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import './index.css';

type State = {
  innerDragging: boolean
}

export default function Hello() {

  const outerLayouts = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2},
  ];

  const innerLayouts = [
    {i: 'm', x: 0, y: 0, w: 1, h: 1},
    {i: 'n', x: 1, y: 0, w: 1, h: 2},
  ];

  return <div>
    <h1>Hello React</h1>
    <GridLayout className='layout' layout={outerLayouts} cols={12} rowHeight={30} width={1200}
                draggableHandle='.outerHandle'>
      <div key='a' className='outer'>A
        <div className="outerHandle"/>
      </div>
      <div key='b' className='outer'>
        <GridLayout className='layout' layout={innerLayouts} cols={12} rowHeight={30} width={1200}
                    containerPadding={[0, 0]}
                    draggableHandle='.innerHandle'>
          <div key='m' className='inner'>M
            <div className="innerHandle"/>
          </div>
          <div key='n' className='inner'>N
            <div className="innerHandle"/>
          </div>
        </GridLayout>
        <div className="outerHandle"/>
      </div>
      <div key='c' className='outer'>C
        <div className="outerHandle"/></div>
    </GridLayout>
  </div>
}


