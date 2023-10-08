import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Content } from './content'
import Result  from './result'

export const App = () => {

    const graph = {
        1: [2,3,4],
        2: [5],
        3: [5,6],
        4: [3],
        5: [7],
        6: [8,9],
        7: [],
        8: [10],
        9: [10],
        10: [],
    }

    return (
        <BrowserRouter>
            <div style={{ width: '320px', margin: '0 auto' }}>
                <Content />
                <Result graph={graph} />
            </div>
        </BrowserRouter>
    )
}
