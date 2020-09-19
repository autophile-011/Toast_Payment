const button = document.getElementById('toast-button');
const toast = document.getElementById('toast-massage');

button.addEventListener('click', ( ) => {
    toast.classList.add('show');
    setTimeout( () => {
        toast.classList.remove('show');
    },2000);
});