const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (deferredPrompt !== null) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      deferredPrompt = null;
      butInstall.classList.toggle("hidden", true);
    }
    console.log(`User response to the install prompt: ${outcome}`);
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", () => {
  // Hide the button
  butInstall.classList.toggle("hidden", true);
  //
  deferredPrompt = null;
});