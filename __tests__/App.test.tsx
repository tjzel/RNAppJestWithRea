import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';
import {it} from '@jest/globals';

it('renders correctly', () => {
  render(<App />);
});
