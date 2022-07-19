const dom = (() => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modal = document.querySelector('.modal');
  const form = document.querySelector('#form');

  (function toggleModal(){
      showModal();
    if (showModal){
      closeModal();
    }
  })();
  
  function showModal(){
    const addButton = document.querySelector('.add-button')
    addButton.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalOverlay.style.display = 'block';
    })
  }

  function closeModal() {
    modalOverlay.addEventListener('click', () => {
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
      form.reset();
    })
  
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
      form.reset();
    })
  };

})();