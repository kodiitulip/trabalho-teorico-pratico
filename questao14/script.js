// localStorage
document.getElementById('localSave').addEventListener('click', function() {
  const value = document.getElementById('localInput').value;
  localStorage.setItem('localData', value);
  alert('Dados salvos no localStorage!');
});

document.getElementById('localLoad').addEventListener('click', function() {
  const value = localStorage.getItem('localData');
  document.getElementById('localOutput').innerText = value || 'Nenhum dado encontrado.';
});

// sessionStorage
document.getElementById('sessionSave').addEventListener('click', function() {
  const value = document.getElementById('sessionInput').value;
  sessionStorage.setItem('sessionData', value);
  alert('Dados salvos no sessionStorage!');
});

document.getElementById('sessionLoad').addEventListener('click', function() {
  const value = sessionStorage.getItem('sessionData');
  document.getElementById('sessionOutput').innerText = value || 'Nenhum dado encontrado.';
});

// IndexedDB
let db;
const request = indexedDB.open('MyDatabase', 1);

request.onupgradeneeded = function(event) {
  db = event.target.result;
  const objectStore = db.createObjectStore('MyStore', { keyPath: 'id', autoIncrement: true });
  objectStore.createIndex('value', 'value', { unique: false });
};

request.onsuccess = function(event) {
  db = event.target.result;

  document.getElementById('dbSave').addEventListener('click', function() {
      const value = document.getElementById('dbInput').value;
      const transaction = db.transaction(['MyStore'], 'readwrite');
      const store = transaction.objectStore('MyStore');
      store.add({ value: value });
      alert('Dados salvos no IndexedDB!');
  });

  document.getElementById('dbLoad').addEventListener('click', function() {
      const transaction = db.transaction(['MyStore'], 'readonly');
      const store = transaction.objectStore('MyStore');
      const request = store.getAll();

      request.onsuccess = function() {
          const values = request.result.map(item => item.value).join(', ');
          document.getElementById('dbOutput').innerText = values || 'Nenhum dado encontrado.';
      };
  });
};