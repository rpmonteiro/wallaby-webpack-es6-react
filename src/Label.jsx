import React from 'react';
import Quill from './Quill';

let Label = React.createClass({
  render: function () {
    return <div>
      Wallaby.js{' ' + (this.props ? this.props.children : 'unexpected')}
    </div>;
  }
});

export default Label;
