// Listen for messages from the background script
function toggleDialog() {
  let dialog = document.getElementById('my-dialog');   // Check if dialog already exists

  if (!dialog) {
    // If the dialog does not exist, create it
    dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'my-dialog');
    dialog.style.width = '100%';
    dialog.style.height = '100%';
    dialog.style.zIndex = '10000';
    dialog.style.position = 'fixed';
    dialog.style.border = 'none';
    dialog.style.display = 'block';
    dialog.style.backgroundColor = 'rgba(0,0,0,0)';
    dialog.style.overflow = 'hidden';
    dialog.style.margin = '0px';

    document.body.appendChild(dialog);

    // Create an iframe to load the React app
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', chrome.runtime.getURL('index.html'));   // Point to the React app
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.background = 'transparent';

    // Append iframe to dialog
    dialog.appendChild(iframe);

    // Show the dialog
    dialog.showModal();
    
    iframe.contentWindow.background = 'transparent';
    iframe.contentWindow.backgroundColor = 'transparent';
    iframe.contentDocument.background = 'transparent';
    iframe.contentDocument.backgroundColor = 'transparent';
  } else {
    // Toggle the dialog's visibility
    if (dialog.style.display != "none") {
      console.log("close");
      dialog.style.display = "none";
      dialog.close();   // Close the dialog if it's open
    } else {
      dialog.style.display = 'block';
      dialog.showModal();   // Show the dialog if it's closed
    }
  }
};

if (!window.listenerAdded) {

  window.listenerAdded = true;
  chrome.runtime.onMessage.addListener((message) => {

    if (message.action === 'toggleDialog') {
      toggleDialog();
    }
  });


  // Listen for messages from the webpage
  window.addEventListener('message', (event) => {
    // Ensure the message is coming from the correct origin
    // if (event.source === window) return; // Only accept messages from the same window
    console.log(event.data);
    if (event.data && event.data.type === 'TOGGLE_DIALOG') {
      toggleDialog();
      // Forward the message to the background script
      // chrome.runtime.sendMessage({ action: 'toggleDialog' }, (response) => {
      //   console.log(response); // Optional: Handle the response from the background script
      // });
    }
  });
}