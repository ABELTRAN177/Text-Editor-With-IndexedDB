import { openDB } from 'idb';

const initDb = async () => {
    openDB('jate', 1, {
        upgrade(db) {
if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
    }
    db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    console.log('jate database created');
},
    });
}

export const putDb = async (data) => {
    console.log('PUT to the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ id: 1, value: content });
    const result = await request;
    console.log('Data request saved to the database', result.value);
}

export const getDb = async () => {
    console.log('GET from the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.get(1);
    const result = await request;
    result ? console.log('Data request loaded from the database', result.value) : console.log('No data found in the database');
    return result?.value;
};

initDb();