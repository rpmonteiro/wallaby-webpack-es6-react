'use strict';

import Quill              from 'quill/core';
import Toolbar            from 'quill/modules/toolbar';
import Bold               from 'quill/formats/bold';
import Italic             from 'quill/formats/italic';
import Header             from 'quill/formats/header';
import Underline          from 'quill/formats/underline';
import Blockquote         from 'quill/formats/blockquote';
import List, { ListItem } from 'quill/formats/list';


Quill.register({
  'modules/toolbar':    Toolbar,
  'formats/underline':  Underline,
  'formats/bold':       Bold,
  'formats/italic':     Italic,
  'formats/list':       List,
  'formats/list/item':  ListItem,
  'formats/header':     Header,
  'formats/blockquote': Blockquote
});

export default Quill;
