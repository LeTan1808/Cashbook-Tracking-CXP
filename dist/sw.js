self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Thông báo mới';
  const options = {
    body: data.body || 'Bạn có một cập nhật mới từ Cashbook',
    icon: 'icon.png',
    badge: 'icon.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
