const select = document.getElementById('select');
const light = document.querySelector('.light');

select.checked = true;


select.addEventListener ('change', () => {
    if (select.checked === false) {
       light.classList.replace('light', 'dark');
    }
    if (select.checked === true) {
       light.classList.replace('dark', 'light');
    }
 })