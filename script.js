const inputs = document.querySelectorAll('[enter]');
const labels = document.querySelectorAll('label');
const btn = document.querySelector('[type="submit"]');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value !== "") {
            labels[index].setAttribute('up', 'yes');
            console.log(labels[index]);
        } else if (input.value === "") {
            labels[index].removeAttribute('up');
        }

        if (!input.validity.valid) {
            input.classList.add('invalid');
            labels[index].classList.add('invalid');
            btn.style.cssText = 'background:rgba(0, 128, 0, 0.582); cursor: not-allowed;';
        } else {
            input.classList.remove('invalid');
            labels[index].classList.remove('invalid');
            btn.style.cssText = 'background: green; cursor: pointer;';
        }
    });
});
