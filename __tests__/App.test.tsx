import React from 'react';
import {render} from '@testing-library/react-native';
import {it} from '@jest/globals';

import Animated from 'react-native-reanimated';

// This works
// jest.mock('react-native', () => {
//   return jest.requireActual('react-native');
// });

// This also works
// jest.doMock('react-native', () => {
// return Object.setPrototypeOf({}, ReactNative);
// });

// This properly mocks the module as undefined.
// jest.mock('react-native', () => undefined);

it('renders correctly', () => {
  render(<Animated.View />);
});
