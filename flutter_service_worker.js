'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "383e4528c9adc677bd250cb14a987512",
".git/config": "1df0f5015244b2203ffcd5b1eb1911a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7d4c36d11757ab5d27e18e7db79947f9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e6c55bc5758efd0a280e441036c02374",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "845851954b98324a845f34a797f43249",
".git/logs/refs/heads/main": "68cddda13545479b8c41cf46daa0edda",
".git/logs/refs/remotes/origin/HEAD": "b7ea3cda7d35cc196d2c4f15bbcdbc93",
".git/logs/refs/remotes/origin/main": "cb84298c9620fcda6f1803c21e38a90b",
".git/objects/0f/cb26d45fa0852ad382b51294e4593d0faee77f": "04cbbf9a34156e3101e2befc1bcf62c3",
".git/objects/14/e61d537d6438b2755aa607061bb773d4def4d5": "decaf856468a54ac62532989bf578b97",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/4389cf98da393a5296b25171dfdbf050459d5c": "a79e3d574c0cde4f36d830042cb52266",
".git/objects/22/5e0159749cfa0f331088a7c275c8ea84f4e20a": "ddec2b32b391802ff50b7a8d585a9467",
".git/objects/29/70480c223b6eaeebba5ed2b730662a59d76cd4": "53818be4d452b8ba82151878e594641b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/d9af9fa611932beb99206db85a61f1ed5d608b": "eb977716b0c23a8b94674bf8299a5b50",
".git/objects/2f/18372492b5ae5e9636abf12fe9c3eebf5c382b": "491cb15372ec1c3431fc668cb4b55243",
".git/objects/30/845426e6ef90c75e64d07dbba267b97c5a834d": "f11b2b829663e0aa1fa58271573e4b61",
".git/objects/36/b65b5d801b77051b45544b02850c0c9dff9bf2": "dfcbb97d3b10b40886a4618f07d91cb6",
".git/objects/3d/bbccb351a51f4eb17c93dadacbd8c9251eafaf": "142442e8ef095e85e38bf737a32352aa",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/169035d0c409e6cb629e3e9cc20a1e767840c6": "56a8658a74cc80cb6589c6e17930b134",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ae1f147cf70d4df1471f0e9df46b654d11fe9c": "3970d34b4b95c879b5747a951c21a662",
".git/objects/4c/97221fd2412d8de84affbe6c2749793e6a90c4": "0178e513092116355a6145ccb7344dba",
".git/objects/4f/c8d9df5075a90dfb153a5f34aaad9d80e80491": "75057759a0f105611ff8173b48bd9d39",
".git/objects/4f/cca74657ef7c2129e5334506a534718043dca9": "c0f7476d60bbb9cad066fb8f42b53137",
".git/objects/59/0a7bf25f05d738ee4e75eed35ddf3a19a51fd2": "09b5dacf058b51793d43acf3c437be1d",
".git/objects/5a/e0035f04e74095334bed6a68aa229d0e0c0a84": "14f29c9d02eb073e8e73b89e4522d4db",
".git/objects/5d/7007db9a180ecc109fa4838529babc13dce6de": "8f022c8df1ec6b464eec9d2b27c0e3b8",
".git/objects/5d/92b1185579e8558a6d19d12197c5ff85b4b9e5": "6af3e266abb144dbc148df9a7e06bb43",
".git/objects/5e/7242b83eae2d005f1c441253bcc0546939b749": "6802d1ecd02ea16ca0f47a7c25769003",
".git/objects/72/e838d3c9d573bd4be8ee51c60e2812e26fb9d9": "7832a2fdccde71374883e8318e695a8d",
".git/objects/77/466aaf239a926ab1676696f15323a8a4701ae6": "8cbf116b4e2f1cdf8b94b50d3c2c1941",
".git/objects/78/3bcc9530506f9d2cd1fb9d31c9f93ab9595fce": "bd06d1d70b6d77f9cb64dd7df5d54b23",
".git/objects/78/f4321b49990e4c7841e13224e963061539fb10": "ebed6e8dab042bb0ee7aa4c48a9f5175",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/85/8e20d50ab42494b24d54a3936d59573fd6d8be": "fcec48a7b8977493f82158025d762f8b",
".git/objects/85/98dfc79d6fccfb2cdc820f2d8202362105b560": "91990a0be5d860dc9302e00997600740",
".git/objects/87/45cea6825e10e608eeb750e05589762ec742bd": "d9e36d8447b8050724063b1b2dd8f076",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b1276ae9b6e6dd76f82b66c8fb8cc4d2ede227": "49e9c34e1f8b9040f53ace1bf42c8a93",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/96/704345243e1408fe5e0bb4a5896dcac5139904": "e6dacf9fc784002f90f665772a1d6e3b",
".git/objects/97/2c295775262dba0a8385ee8ed3213415d7bbce": "6f6a749522f00865069f35752fda3e65",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/e2c46ad1df86c087c601384d870b0eb31dc5e2": "82f84148bab6ede001d72cf20d5fbcc3",
".git/objects/9f/351be15823522949f81acdffc87b6af38127dc": "11608b810a4afa3bcbbf9c2ebf5a9b5f",
".git/objects/a0/f2d71f35d5804e4aa2f34248e8f1570e0fb959": "3d22816dffc68c151da0244b7e943c7c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/aecac9aab5ba4ee670057518e7b348a6b04936": "6b1566aa8e51dc0396ae3e868ad86e7f",
".git/objects/a2/7d0f140d283b2ed5d3b465f99b4dea64485b5a": "4d739c7dc664c79056dcb8a7707819cc",
".git/objects/a2/a52d1456e6b64471cf6db041a072a7a8546fe1": "67c0633d08a0be8f8ad26b53fc5f47ec",
".git/objects/a3/3ee4a0e75552ddce174ae5071d50ab03b1e943": "f308645a763aef82f39831e3d871d711",
".git/objects/a6/cf3d6395de7586e34634e8afd80c116df49260": "0e5684945807856a89ff247150a9a6f6",
".git/objects/a7/093943f66ca7d0d9501e4b2ac5a8cf3254f164": "cbfc390553c42df8bebbc7c87013417c",
".git/objects/a7/9536e8a1ff102ce7aecb4ccea002603ef4bbf0": "f2cf8ed7c9bf4ba74b09f36a080381ce",
".git/objects/a9/3bc93f06e7061e9eaa0c9d635ac84b9efad51e": "de7d5cd200c3fbd61c3376a621e3a4e2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/386bcae804b61e86d2fef591083ec4ce7d524b": "5161870b33d8552e04817d292ad14493",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c978f5239b4a1e72f84d83e0d650aa4308a624": "aee3849c5d13407d8cc6c8e3b903acae",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/22f621d249f558abbe42d0f922c86b3dbe5378": "30f796d9d48047981fb729c9db04f9d0",
".git/objects/c4/a77b67b8df76851894564c157d04f36854506a": "d796f7bd7ee835f114f9c1a61203cf6a",
".git/objects/c7/e80423dbe899dec4d15f7d14403c812a4d1fe6": "142f074e4d55c0469a98d832b33e7a90",
".git/objects/c9/26d1d7bbf93ab4b949f82fd7aa77b91d3aba7f": "46772a2319b0a41cf8fd374a15fa36d6",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/99f4b7a5a76f717e9babba17ee2a264dc339d9": "4c5af2db4aa336c7655ec7817468ed2d",
".git/objects/ce/d4beb8d2c224fcd36b953cb1e0ce0da4f99c11": "7a96d8433a3e95fbd6a796dd09fa3213",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d3/9dc3807cf3cf0fcdee831d4c1fd43e0c6cbbd5": "07f5876d0eebf848f8ae4df3579dfd78",
".git/objects/d5/4a867c1b91891974f90fe601e3303f8f59b5a5": "f374f1d67959a258950aea90de15b646",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/b5d6c1e24fd4059442f88ef2d2ac824096e7d7": "647a5e2b7403c07575908f8d7ba4b494",
".git/objects/dd/ab8a361ec3395063ccea273422205a7b9b12a5": "68646b3208da52f1003450e38ea51186",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/35fc5250b7e77ea56e28892d18595acc0f02fe": "12e2b41923422cf8bb026a8ff441a1af",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/2ac6b71ded629f2bcae3632ff1377ac1a72c9b": "f6bbffcdc57f26a0344fac93371a33c6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/4ce7291392dfccd85776cbe8e01b6b68164c0c": "265582897d4af238a417da59c457801f",
".git/objects/f8/eedf4f03681bb2d5331f4e4fe1a35f04cfc2ce": "201a11501d9d9cb7782d8a2dbeeada24",
".git/objects/fa/ad883fb45524ebf175bde4415fe689c211bde9": "8d67f54f68bab445b554ab6883744fa9",
".git/objects/fa/c6b300d1ad68c4246591969c61fd705e9a6300": "7301fe3a620a9abf23027b492d2921ae",
".git/refs/heads/main": "46d5562e95d4ff431f5fd78794db1feb",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "46d5562e95d4ff431f5fd78794db1feb",
"assets/AssetManifest.json": "f9ac79e47feed2004a92c75a624238b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
"assets/NOTICES": "7d984ec22ca3fb477363843e2da27990",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "1cd5b01f8fc907ee2cd52006cdcc3a5f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "928ae6ff77bef666864b7e2dee61fc8f",
"/": "fc4d257d7386e8577f567ae02ee300df",
"main.dart.js": "d7471380df1dce16390b606ce76fc456",
"manifest.json": "f42279028b0d60427c7dd72ad1b99f5b",
"readme.md": "81051bcc2cf1bedf378224b0a93e2877",
"version.json": "2067ab2dcb637b7b0df8f2434db66f66",
"web/assets/AssetManifest.json": "f9ac79e47feed2004a92c75a624238b4",
"web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"web/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"web/assets/google_fonts/Raleway-Black.ttf": "35e0e2e7a5b03275ba569a214edbab77",
"web/assets/google_fonts/Raleway-BlackItalic.ttf": "ce55274864c3c831b62f242c26a0d0d5",
"web/assets/google_fonts/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"web/assets/google_fonts/Raleway-BoldItalic.ttf": "17e4f15fd9c264d7a42545c6805bcfdf",
"web/assets/google_fonts/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"web/assets/google_fonts/Raleway-ExtraBoldItalic.ttf": "103c571d4c407f84e5cde93be75a25e7",
"web/assets/google_fonts/Raleway-ExtraLight.ttf": "550ad10fece0b35b0325d38192701592",
"web/assets/google_fonts/Raleway-ExtraLightItalic.ttf": "2a6861ab9c9233a15d90d59d3050840f",
"web/assets/google_fonts/Raleway-Italic.ttf": "b88299f8225ae49ce121b1f6aa456dbc",
"web/assets/google_fonts/Raleway-Light.ttf": "ed645c2b20d22612c4985bc4e4b4a7ff",
"web/assets/google_fonts/Raleway-LightItalic.ttf": "7f5fba2f6aeba3babf61fcd6adbc7798",
"web/assets/google_fonts/Raleway-Medium.ttf": "b952c3c81ba34b54c66c748ea1e828a7",
"web/assets/google_fonts/Raleway-MediumItalic.ttf": "15a3a013eeb5a3bdc9f20227ca62861d",
"web/assets/google_fonts/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"web/assets/google_fonts/Raleway-SemiBold.ttf": "87641f9900d717d6bfbf108b8755868e",
"web/assets/google_fonts/Raleway-SemiBoldItalic.ttf": "806d2907def84e9d321b462b43247111",
"web/assets/google_fonts/Raleway-Thin.ttf": "db8e7354e2585143a4f7ef6f71bfe0ca",
"web/assets/google_fonts/Raleway-ThinItalic.ttf": "288e7c0d0109f91c766c7096f2a0217d",
"web/assets/NOTICES": "7d984ec22ca3fb477363843e2da27990",
"web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"web/assets/shaders/ink_sparkle.frag": "1cd5b01f8fc907ee2cd52006cdcc3a5f",
"web/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"web/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"web/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"web/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "fc4d257d7386e8577f567ae02ee300df",
"web/main.dart.js": "31f82d348a2b4da7b0a5b5ed80fe17e6",
"web/manifest.json": "f42279028b0d60427c7dd72ad1b99f5b",
"web/version.json": "2067ab2dcb637b7b0df8f2434db66f66"
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
