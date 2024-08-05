document.addEventListener('DOMContentLoaded', () => {
    const gmailInput = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const gmailResult = document.getElementById('gmail_result');

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    
    function checkGmail() {
        const inputValue = gmailInput.value.trim();
        if (gmailRegex.test(inputValue)) {
            gmailResult.textContent = 'Valid Gmail address!';
            gmailResult.style.color = 'green';
        } else {
            gmailResult.textContent = 'Invalid Gmail address!';
            gmailResult.style.color = 'red';
        }
    }

    gmailButton.addEventListener('click', checkGmail);
});


document.addEventListener('DOMContentLoaded', () => {
    const childBlock = document.querySelector('.child_block');
    const parentBlock = document.querySelector('.parent_block');
    const parentWidth = parentBlock.offsetWidth;
    const childWidth = childBlock.offsetWidth;
    let position = 0;

    function moveBlock() {
        if (position + childWidth <= parentWidth) {
            position += 1; 
            childBlock.style.left = `${position}px`;
            requestAnimationFrame(moveBlock); 
        }
    }

    moveBlock(); 
});



