import { getDb, putDb } from './database';
import { header} from './header';

export default class {
    constructor () {
        const localData = localStorage.getItem('content');

        if (typeof CodeMirror === 'undefined') {
            throw new Error('CodeMirror is not defined.');
        }

        this.editor = CodeMirror(document.querySelector('#main'), {
            value:'',
            lineNumbers: true,
            mode: 'javascript',
            theme: 'monokai',
            tabSize: 2,
            indentUnit: 2,
            lineWrapping: true,
            autofocus: true,
        });

        getDb().then((data) => {
            console.info('Data loaded from IndexedDB:');
            this.editor.setValue(data || localData || header);
        });

        this.editor.on('change', () => {
            localStorage.setItem('content', this.editor.getValue());
        });

        this.editor.on('blur', () => {
            console.log('The editor lost track');
            putDb(localStorage.getItem('content'));
            });
    }
}