export default function createFooter() {
    const footer = document.createElement('footer');
    const footerCredits = document.createElement('footer')
    footerCredits.classList.add('credits');
    footerCredits.innerText = "Pancake image by: macrovector / Freepik \u00A0";
    const link = document.createElement('a');
    link.href = "http://www.freepik.com";
    link.innerText = 'http://www.freepik.com';
    footerCredits.appendChild(link);
    footer.appendChild(footerCredits);

    return footer;
}