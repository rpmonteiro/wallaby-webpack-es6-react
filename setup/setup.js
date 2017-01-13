'use strict';

import 'babel-polyfill';
import expect    from 'expect';
import expectJSX from 'expect-jsx';
import { jsdom } from 'jsdom';

global.document  = jsdom('<!doctype html><html><body></body></html>');
global.window    = document.defaultView;
global.location  = {
  protocol: 'http'
};
global.window.__testing__  = true;

global.alert = (msg) => msg;
global.VERSION = 1;
global.window.performance = Date;
global.window.requestAnimationFrame = () => 0;
global.window.cancelAnimationFrame = () => false;
global.Node = {};

const exposedProperties = ['window', 'navigator', 'document'];
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

// global.navigator = global.window.navigator;
global.navigator = {
  userAgent: 'node.js'
};

import StorageShim from 'node-storage-shim';
window.localStorage = new StorageShim();

expect.extend(expectJSX);

expect.extend({
  toBeCloseTo(value, precision = 2, message) {

    expect.assert(
      typeof this.actual === 'number',
      'The "actual" argument in expect(actual).toBeCloseTo() must be a number'
    );

    expect.assert(
      typeof value === 'number',
      'The "value" argument in toBeCloseTo(value) must be a number'
    );

    expect.assert(
      typeof precision === 'number',
      'The "precision" argument in toBeCloseTo(value, precision) must be a number'
    );

    const close = Math.abs(value - this.actual) < (Math.pow(10, -precision) / 2);

    expect.assert(
      close,
      (message || 'Expected %s to be within %s decimal places of %s'),
      this.actual,
      precision,
      value
    );
  }
});
