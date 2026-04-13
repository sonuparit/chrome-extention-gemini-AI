const cleanGemini = () => {
  // 1. Remove <top-bar-actions>
  const topBar = document.querySelector('top-bar-actions');
  if (topBar) topBar.remove();
  
  // 2. Remove <hallucination-disclaimer>
  const halldisclaimer = document.querySelector('hallucination-disclaimer');
  if (halldisclaimer) halldisclaimer.remove();


  // 3. Remove the desktop-ogb-buffer div
  const ogbBuffer = document.querySelector('div.desktop-ogb-buffer');
  if (ogbBuffer) ogbBuffer.remove();

  // 4. Remove "input-gradient" class from <input-container>
  const inputContainer = document.querySelector('input-container');
  if (inputContainer && inputContainer.classList.contains('input-gradient')) {
    inputContainer.classList.remove('input-gradient');
  }
};

// Run immediately when script loads
cleanGemini();

// Use MutationObserver to keep changes active when switching chats/views
const observer = new MutationObserver((mutations) => {
  cleanGemini();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});