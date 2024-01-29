const pass = document.querySelectorAll('[type="password"]');

pass.forEach(element => {
    element.addEventListener('input', () => {
        if(!validatePass(element.value)) {
            element.style.borderBottom = '1px solid red';
        }
    })
});

function validatePass (value) {
    const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!complexityRegex.test(value)) {
        console.log("no");
        return false;
    }else return true;
}
