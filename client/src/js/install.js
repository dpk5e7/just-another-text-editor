const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener("beforeinstallprompt", (event) => {
//   console.log("Install beforeinstallprompt");
//   window.deferredPrompt = event;
//   butInstall.classList.toggle("hidden", false);
// });
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  butInstall.classList.toggle("hidden", false);
  console.log(`'beforeinstallprompt' event was fired.`);
});

// TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener("click", async () => {
//   console.log("Install click");
//   console.log("window.deferredPrompt: " + window.deferredPrompt);
//   const promptEvent = window.deferredPrompt;
//   if (!promptEvent) {
//     return;
//   }

//   promptEvent.prompt();
//   window.deferredPrompt = null;
//   butInstall.classList.toggle("hidden", true);
// });

butInstall.addEventListener("click", async () => {
 console.log("Install click");
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
// window.addEventListener("appinstalled", (event) => {
//   console.log("Install appinstalled");
//   window.deferredPrompt = null;
// });

window.addEventListener("appinstalled", () => {
  butInstall.classList.toggle("hidden", true);
  deferredPrompt = null;
  console.log("PWA was installed");
});