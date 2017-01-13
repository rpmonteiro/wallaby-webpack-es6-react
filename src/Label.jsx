import React, { PropTypes, Component } from 'react';
import Quill from './Quill';
import Delta                                    from 'quill-delta';
import ReactDOM                                 from 'react-dom';

export default class Label extends Component {
  render() {
    return (
      <div>
        Wallaby.js{' ' + (this.props ? this.props.children : 'unexpected')}
      </div>
    )
  }
}
