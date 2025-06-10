const popup = document.getElementById('popup-window');
const popupText = document.getElementById('popup-text');
const closeBtn = document.querySelector('.close');

const projectInfo = {
    coffee: `
        <h3>Coffee Machine</h3>
        <p>This project simulates a coffee machine interface using HTML, CSS, and JavaScript.</p>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
        <p><a href="https://georgemanea64.github.io/Coffee-Machine/" target="_blank">View Project</a></p>
    `,
    flashcards: `
        <h3>Flashcards</h3>
        <p>An interactive flashcard app for quick learning and memorization.</p>
        <p><strong>Technologies:</strong> HTML, CSS</p>
        <p><a href="https://georgemanea64.github.io/Flashcards/" target="_blank">View Project</a></p>
    `,
    piano: `
        <h3>Virtual Piano</h3>
        <p>A virtual piano instrument that plays sounds when keys are pressed.</p>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript, Audio API</p>
        <p><a href="https://georgemanea64.github.io/Virtual-Piano/" target="_blank">View Project</a></p>
    `
};

// Open popup
document.querySelectorAll('.open-window').forEach(button => {
    button.addEventListener('click', () => {
        const projectKey = button.getAttribute('data-project');
        popupText.innerHTML = projectInfo[projectKey] || 'No info available.';
        popup.style.display = 'block';
    });
});

// Close popup
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close popup when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});