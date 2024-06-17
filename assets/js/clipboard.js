const createCopyButton = (codeElement) => {
    const img = document.createElement('img');
    img.classList.add('copy-code');
    img.src = '/assets/copy.svg';

    img.addEventListener('click', () => {
        const codeText = codeElement.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
            img.style.opacity = '0.7';
        }).catch((err) => {
            console.error('Failed to copy text: ', err);
        });
    });

    return img;
};

window.addEventListener('DOMContentLoaded', function() {
        const codeElements = document.querySelectorAll('code');
	codeElements.forEach((codeElement) => {
	    const parentElement = codeElement.parentElement;
	    if (parentElement && parentElement.classList.contains('highlight')) {
	        const copyButton = createCopyButton(codeElement);
	        codeElement.insertBefore(copyButton, codeElement.firstChild);
	    }
	});
});
