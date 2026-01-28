'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b7ba29defff45792810ae01dbdab202e",
".git/config": "d0c2a7d31a8fda2f2f3f5c3e0d28bd64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "93f21e54aeca5d2609a1da7916359681",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "76571f08aaa63c231f6d1969ce76ce2c",
".git/logs/refs/heads/master": "76571f08aaa63c231f6d1969ce76ce2c",
".git/logs/refs/remotes/origin/master": "d14a6c29a0dfda2918c6af65d011e3da",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/12/e3874f23ce1102128c68cf0f313bd4a4446bb6": "15e7ee6ccd1e563ddd1f08635ddb4b83",
".git/objects/16/04b5191ed21b15f7a08b98c90dd189415f04a3": "4653ad55e5d6cbd0a854408ca4c816cc",
".git/objects/19/2fc058130cfca9f79a79997e98e9242b3f54e1": "b7b3db07d5f90560c936cb9dc88dc67b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/30/4478dfaea3e576299eee3e55f9d81e69daef13": "7a56d3b5a7d69166aa606ec23a90e79d",
".git/objects/30/468eb2b2cc27cc675685213fb33bd0e45d6ac2": "af15d427780d773272ee26b008725398",
".git/objects/33/6c25a951a3c84ba5696045df052c897bc5f0d8": "076df580d3672fe4f9fa0a9996df14d8",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/42/95ce4687fd8455ed59456d29f5a8e44e44a1da": "e2a0159bc5f9165eb6ae2c48d09cff93",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/5b/501ebc48a96a23dfce14f5b955bc3657ac0a50": "f2119cc80fb3dd935a0b91ce6f3c84cc",
".git/objects/60/1d3d7607d2ef0a95ee167e9ee1f7bb00580956": "4a81bf1877da21ad876ff23e0df52d7f",
".git/objects/64/2ba37ac46f18ea2a43f5f91d8b9a0e651f641a": "f6b04030a0c9d9fe955f148fd6ed9adc",
".git/objects/65/af6237fe4d94452430edc296bedc5b328ab2df": "d8e4577981148a90daef71d0a7974fcb",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/4631575ca686177f22c7aafe53a5a186fb48ad": "dcb1bab0a16fd3573f0cd70270a59850",
".git/objects/6e/ed798982485188d2f962c26b619ee900217a80": "83da74ef4c95a167afe358f3f1474c9f",
".git/objects/79/6abb6bd08d535d7e0d3328d5c1e4b660046a38": "b8886ebfaf9152c4d7ca5e404cd9180e",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/78ffd87eb6bb380f5afd323b0dbd04db5ce6bc": "b28f34b6f215fbded02f8b29992a72f8",
".git/objects/82/b3bb8468d52447e926cad8461c0bfad38b9476": "eaee616a9b1201ea76e6c55f4c625455",
".git/objects/83/be031fa729369f040346a0157bde132d1260f0": "f2b39b5cf4b7d9fa0f25c5ddc8f2d2a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/f5ee278793a524ac0f6fb7e5f994a86491d653": "b45e5b7e7cde12870a872586f3e344d1",
".git/objects/8e/9f571bd1a4fa08045b038a2dd4e5392e8e60de": "547c63e2827d868d6f092bc0d93f7ef4",
".git/objects/90/a12fe21c529679ad254db35b6fa49887b48f60": "620680423929e7db4078cab93c2a176e",
".git/objects/91/bbd37ba4d519e9eafb53c7dc652f0e68cf4764": "e3c01188dd56924b47ebbc659a5fa6fd",
".git/objects/92/aed0a233b0dea6b94bbe10fcb23e305fa1acd6": "432570baa2dd7b362d2cdbfd5041ced0",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/3f957aad3a3cb635f36d5b1ebb74994e5b1b1e": "a2803c65fa883558f44a85e578612d7f",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/6d6b7fa05282b37749c2893473acf2b893a7ae": "70f6ef738a90ffd1c1026bdb8e3c020f",
".git/objects/a8/7b02dfacf89042dd5b3e1457fd07218758180b": "4ac45ce87d9a1723b31e930819f46270",
".git/objects/a8/daaf2009866ac38a90d8fc1ba2710871bb2675": "4b3875a5e686b44bf8b7f9025bae50fa",
".git/objects/ab/db8b6add16fcf036f77ff00d90f9ef957857c7": "a6f41fb0493574fdead96100b06115ad",
".git/objects/af/cbeef88c3e68d9fae4d1dd7bde4c89eb553d93": "d2708691ae170b1af7395e59840be5ff",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/ba6f9fab7fea0c74611fd507ec7b17895c1916": "20e56ec155c1152a64c5661068c2df9d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2dc016f66c94bda5a476d2e5925b5121b10717": "b50ada6d63801abfab059bb051e75077",
".git/objects/b8/3bcb00fc8ed3fed7ca4cec3f5a8091cda8f3ab": "d268881685d58fd0951191e73a3663a9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/c3e701ca31dd4ca04c30ea2ace595eeaf102ae": "4ebe2ac4ccdbe10a3c30e32fb6fb5034",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/ab5c7a60c6c2e1d32e5da09416bbd96af24421": "a8b0883cea7867a968533a815060578f",
".git/objects/c6/993ec75dc6e7a72b6bdbf2ad6a773dbc8f1195": "1ec850efd84f94fa2e9330d84ea4b63c",
".git/objects/c8/74f7e11600ce10f54a1a934063add553b3c3cf": "5082646feb884330494e7853fac540a3",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8ff017372975bd1741b1e81e81052eed9f5171": "68e2fc7836731603633bcaa3b2b4cfc1",
".git/objects/d6/1cd5cf886518a021c7021f3e14d0f9f2f3abd3": "1c025e3d1c5db76304731f625151d644",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/9ff5c0652d46ef86322a1d4221743d77e46dc0": "0677305237413ea8120788dfbf55d281",
".git/objects/df/5271496d35cadb5286fd9e0b293c6ecbbbab85": "1f3dd8d7641cd7d93b3b05bf5679fbac",
".git/objects/e3/3c26e68136d9a19814d6dc665e2b165d9770cb": "f6fa35bf65b5a0d5adffcdbe4af75868",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/6bb819a4efa5239f51f3b35a329d3f6c4783b3": "ed2746b8af64c38829c55aebeb2a712c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a467e2b4c4159d2b645a219e377cf1791b06b3": "38c9888d6926ea6e74d4b6eb3b65d9dc",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/cde793a7f4600906de317d048cef3e6f1d7d41": "b0f7daabd70a3a3b64166fb1c2b13b3c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/master": "e9f9f96641c79a85b288d4204086406c",
".git/refs/remotes/origin/master": "e9f9f96641c79a85b288d4204086406c",
"assets/AssetManifest.bin": "976948a6b4eec2ff3f8a67781a4c94f2",
"assets/AssetManifest.bin.json": "70a03967e4ee1e733d1552f319541883",
"assets/AssetManifest.json": "1468cd57f43afe6e1aed2e0594edaa98",
"assets/assets/translations/en-US.json": "82fc9b50e15b0a82fb974dfe91717343",
"assets/assets/translations/pl-PL.json": "0b3dfa0fce730ffd179b9df4c24c1e17",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "67f0ad379418c2d975b58b17bafb8c58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "dd04510ad3027fa9c1b5af3ce9c3d403",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "57e1b17f6c67f047e08ff91b97e1ff17",
"/": "57e1b17f6c67f047e08ff91b97e1ff17",
"main.dart.js": "c19633da565608ebfe79463d2d1bd814",
"manifest.json": "9c45e7bf7ac42c834650655ceb3c8b6a",
"version.json": "f4108d5796e23cc7308848bd3552dc78"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
