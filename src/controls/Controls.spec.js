import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';
import Controls from './Controls';

// Test away!

describe('<Controls />', () => {
  it('should provide buttons to toggle closed and locked states', () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
  it('should change button text open ', () => {
    const { getByText } = render(<Controls closed={true} />);
    getByText(/open gate/i);
    
  });
  it('should change button text close ', () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    getByText(/unlock gate/i)
    
  });
  it('should disabled open gate button ', () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    const closedBtn = getByText(/open gate/i);
    expect(closedBtn).toHaveAttribute('disabled')
    
  });
  it('should disable lock button ', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    const lockBtn = getByText(/lock gate/i);
    expect(lockBtn).toHaveAttribute('disabled')
    
  });
});
