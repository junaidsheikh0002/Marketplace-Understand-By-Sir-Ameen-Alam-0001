const button = document.getElementById('clickMe') as HTMLButtonElement;
const output = document.getElementById('output') as HTMLParagraphElement;

button.addEventListener('click', () => {
    output.innerText = 'Button Clicked with TypeScript!';
});
