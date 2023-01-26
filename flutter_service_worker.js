'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c6df0dabea67540336b843ca1db10d94",
"assets/assets/button.riv": "fc36977eadb1f1df675ac219d2418c91",
"assets/assets/checkmark.riv": "5651a693df0c751305eaa41cfc7308f5",
"assets/assets/images/Baum.jpg": "a1917dfb1dfafd9450a82a979dfda9d8",
"assets/assets/images/Himmel.jpg": "94c689699ef5943dc383c53aab9922d7",
"assets/assets/images/Kultur.jpg": "655cae701d5b49b2a60da79edb69835b",
"assets/assets/images/Veranstaltungen.jpg": "65d66591cdfb87403c777ff3a0b8b053",
"assets/assets/loading_bar.riv": "ba7e65b56508be59e55fbc0f84675341",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/google_fonts/Raleway-Black.ttf": "35e0e2e7a5b03275ba569a214edbab77",
"assets/google_fonts/Raleway-BlackItalic.ttf": "ce55274864c3c831b62f242c26a0d0d5",
"assets/google_fonts/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"assets/google_fonts/Raleway-BoldItalic.ttf": "17e4f15fd9c264d7a42545c6805bcfdf",
"assets/google_fonts/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"assets/google_fonts/Raleway-ExtraBoldItalic.ttf": "103c571d4c407f84e5cde93be75a25e7",
"assets/google_fonts/Raleway-ExtraLight.ttf": "550ad10fece0b35b0325d38192701592",
"assets/google_fonts/Raleway-ExtraLightItalic.ttf": "2a6861ab9c9233a15d90d59d3050840f",
"assets/google_fonts/Raleway-Italic.ttf": "b88299f8225ae49ce121b1f6aa456dbc",
"assets/google_fonts/Raleway-Light.ttf": "ed645c2b20d22612c4985bc4e4b4a7ff",
"assets/google_fonts/Raleway-LightItalic.ttf": "7f5fba2f6aeba3babf61fcd6adbc7798",
"assets/google_fonts/Raleway-Medium.ttf": "b952c3c81ba34b54c66c748ea1e828a7",
"assets/google_fonts/Raleway-MediumItalic.ttf": "15a3a013eeb5a3bdc9f20227ca62861d",
"assets/google_fonts/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/google_fonts/Raleway-SemiBold.ttf": "87641f9900d717d6bfbf108b8755868e",
"assets/google_fonts/Raleway-SemiBoldItalic.ttf": "806d2907def84e9d321b462b43247111",
"assets/google_fonts/Raleway-Thin.ttf": "db8e7354e2585143a4f7ef6f71bfe0ca",
"assets/google_fonts/Raleway-ThinItalic.ttf": "288e7c0d0109f91c766c7096f2a0217d",
"assets/NOTICES": "fb84c2313fca0fea962b34f01073652e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d33a3f8fa3b4e6719ebf4cafb6b2946",
"/": "2d33a3f8fa3b4e6719ebf4cafb6b2946",
"main.dart.js": "5f79dbd0e16a79eb27709285961843fb",
"manifest.json": "f42279028b0d60427c7dd72ad1b99f5b",
"version.json": "2067ab2dcb637b7b0df8f2434db66f66"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
