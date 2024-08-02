document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.b1-button');
    const texts = document.querySelectorAll('.t1-text-item');

    // Function to reset all buttons and texts
    const resetState = () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        texts.forEach(text => {
            text.classList.remove('show', 'blue-background');
        });
    };

    // Function to activate a specific button and show corresponding text
    const activateButtonAndText = (index) => {
        resetState();
        buttons[index].classList.add('active');
        texts[index].classList.add('show', 'blue-background');
    };

    // Add click event listeners to each button
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            activateButtonAndText(index);
        });
    });

    // Set default state
    activateButtonAndText(0); // Show text for Button 1 by default
});
