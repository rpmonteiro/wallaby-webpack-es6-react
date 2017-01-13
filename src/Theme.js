'use strict';

import BaseTheme from 'quill/themes/base';
import icons     from 'quill/ui/icons';


const TOOLBAR_CONFIG = [
  [{header: 1 }, { header: 2 }],
  ['blockquote', { list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  ['itemlink', 'person', 'place', 'creation', 'event', 'clean']
];


class FullTheme extends BaseTheme {
  constructor(quill, options) {
    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }
    super(quill, options);
    this.quill.container.classList.add('ql-custom');
  }

  extendToolbar(toolbar) {
    toolbar.container.classList.add('ql-custom');
    this.overrideIcons();
    this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), icons);
  }
  
  overrideIcons() {
    icons['itemlink'] = '<i title="Link to another item" class="material-icons">link</i>';
    icons['person']   = '<i title="Person tag" class="material-icons">person</i>';
    icons['place']    = '<i title="Place tag" class="material-icons">place</i>';
    icons['creation'] = '<i title="Creation tag" class="material-icons">import_contacts</i>';
    icons['event']    = '<i title="Event tag" class="material-icons">event</i>';
    icons['clean']    = '<i title="Clear formatting" class="material-icons">format_clear</i>';
  }
}

export default FullTheme;
