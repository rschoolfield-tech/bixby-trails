# Bixby Trail Finder

A free guide to 51 Oklahoma walks and hikes, designed for phones. No account, subscription, paid API, or build step is required.

## Use on iPhone

Open the published website in Safari. Tap Share (inside the More or Page Menu on some Safari layouts), then Add to Home Screen. Enable Open as Web App if shown and tap Add.

Search by trail, town, or feature. Choose a filter and tap the heart to save a trail. Use location optionally sorts by straight-line distance; it does not save your coordinates. Directions open Google Maps with the trail destination only.

## Offline and favorites

Visit online once and wait for the offline-ready message. Trail text and app files can then be read without a connection. Trail thumbnails are embedded in the guide and are available with the cached page. Maps, directions and external notices require internet. Browser storage may be cleared or evicted.

Favorites stay on each device. Use Back up favorites to download a backup and Restore favorites to merge that backup into another browser or device. The original HTML's favorites can be moved through its existing browser storage or a JSON array of trail IDs; do not assume favorites automatically sync to a new website address.

Trail information was inherited from the October 19, 2026 guide; notices show their original check dates and are not live. Check the official park links before traveling. Thumbnails use licensed or public-domain images with in-app source and license credits. Twenty-one cards show park/area imagery; thirty use a clearly labeled generic woodland photo, not a depiction of that trail. Images are resized and embedded, avoiding fragile third-party hotlinks.

## Hosting

Publish the main branch root with GitHub Pages. Keep index.html, sw.js, manifest.webmanifest and the icons directory together. All paths are relative for project-site hosting. Update the service-worker cache name when shipping a new version.

GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

Apple installation instructions: https://support.apple.com/guide/iphone/iphea86e5236/ios

