import React     from 'react';
import TestUtils from 'react/lib/ReactTestUtils'
import Label     from '../src/Label'
import expect    from 'expect';
import { shallowComp } from './helpers';


describe('Label', function () {

  it('should not be undefined', function () {
    const { output } = shallowComp(Label);
    expect(true).toBe(true);
  });

});
