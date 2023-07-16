async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./serviceWorker.js");
      console.log(`SW registration working`);
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}

export default registerServiceWorker;
