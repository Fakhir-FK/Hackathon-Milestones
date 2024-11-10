const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    // Use getComputedStyle to get the actual computed display value
    const computedStyle = window.getComputedStyle(skills);
    const currentDisplay = computedStyle.display;

    if (currentDisplay === 'none') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
});