if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
          console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(function(error) {
          console.log('Falha ao registrar Service Worker:', error);
      });
}