/* custom dropdown */
const atbdDropdown = document.querySelectorAll('.atbd-dropdown');

// toggle dropdown
let clickCount = 0;
atbdDropdown.forEach(function(el) {
        el.querySelector('.atbd-dropdown-toggle').addEventListener('click', function(e) {
                e.preventDefault();
                clickCount++;
                if (clickCount % 2 === 1) {
                        document.querySelectorAll('.atbd-dropdown-items').forEach(function(elem) {
                                elem.classList.remove('atbd-show');
                        });
                        el.querySelector('.atbd-dropdown-items').classList.add('atbd-show');
                } else {
                        document.querySelectorAll('.atbd-dropdown-items').forEach(function(elem) {
                                elem.classList.remove('atbd-show');
                        });
                }
        });
});

// remvoe toggle when click outside
document.body.addEventListener('click', function(e) {
        if (e.target.getAttribute('data-drop-toggle') !== 'atbd-toggle') {
                clickCount = 0;
                document.querySelectorAll('.atbd-dropdown-items').forEach(function(el) {
                        el.classList.remove('atbd-show');
                });
        }
});

// custom select
const atbdSelect = document.querySelectorAll('.atbd-drop-select');
atbdSelect.forEach(function(el) {
        el.querySelectorAll('.atbd-dropdown-item').forEach(function(item) {
                item.addEventListener('click', function(e) {
                        e.preventDefault();
                        el.querySelector('.atbd-dropdown-toggle').textContent = item.textContent;
                });
        });
});
