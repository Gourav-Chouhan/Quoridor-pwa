const staticDevCoffee = "quoridor";
const assets = [
	"/",
	"/index.html",
	"/style.css",
	"/main.js",
	"/names.js",
	"/person.js",
	"/p5.min.js",
	"/routing.js",
	"/piece.js",
	"/auth.js",
	"/images",
];

self.addEventListener("install", (installEvent) => {
	installEvent.waitUntil(
		caches.open(staticDevCoffee).then((cache) => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener("fetch", (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request);
		})
	);
});
