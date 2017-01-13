'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';

export function shallowComp(comp, opts = {}) {
  const props = Object.assign({}, opts);
  const el = React.createElement(comp, props);
  const output = shallow(el);
  return { props, output };
}

export function mountComp(comp, opts = {}) {
  const props = Object.assign({}, opts);
  const el = React.createElement(comp, props);
  const output = mount(el);
  return { props, output };
}
