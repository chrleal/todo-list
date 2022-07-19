const dom = (() => {
  
  (function toggleModal(){
    const addButton = document.querySelector('.add-button')
    addButton.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      modal.style.display = 'block';
    })
    if (toggleModal){
      closeModal();
    }
  })();
  
  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    })
  
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    })
  };

})();