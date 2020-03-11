/* custom dropdown */
const atbdDropdown = document.querySelectorAll('.atbd-dropdown');
atbdDropdown.forEach(function(el) {
        el.querySelector('.atbd-dropdown-toggle').addEventListener('click', function(e) {
                e.preventDefault();
                el.querySelector('.atbd-dropdown-items').classList.toggle('atbd-show');
        });
});
