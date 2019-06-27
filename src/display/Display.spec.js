import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'
import Display from './Display';
// Test away!

describe('<Display />', () => {
    it('matching snapshot', () => {
        const tree = renderer.create(<Display />)
        expect(tree.toJSON()).toMatchSnapshot()
    })
    it('should render display component', () => {
        render(<Display />)
    })
    it('should display Closed if closed prop is true', () => {
        const { getByText } = render(<Display closed={true} />)
        getByText(/Closed/)
    })
    it('should display Locked if locked prop is true', () => {
        const { getByText } = render(<Display locked={true} />)
        getByText(/Locked/)
    })
    it('should use red-led class when locked or closed', () => {
        const { getByText } = render(<Display locked={true} closed={true} />)
        const locked =  getByText(/locked/i)
        const closed = getByText(/closed/i)
        expect(locked).toHaveClass("red-led")
        expect(closed).toHaveClass("red-led")
    })
    it('should use green-led class when locked or closed', () => {
        const { getByText } = render(<Display locked={false} closed={false} />)
        const locked =  getByText(/unlocked/i)
        const closed = getByText(/open/i)
        expect(locked).toHaveClass("green-led")
        expect(closed).toHaveClass("green-led")
    })
})