import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Dashboard from './Dashboard';
// Test away

describe('<Dashboard />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />)
        expect(tree.toJSON()).toMatchSnapshot();
    })
    it('should render dashboard', () => {
        render(<Dashboard />)
    })
    it('should display controls component', () => {
        const { getByText } = render(<Dashboard/>)
        getByText(/lock gate/i)
    })
    it('should display Display component', () => {
        const { getByText } = render(<Dashboard />)
        getByText(/unlocked/i)
    })
}) 