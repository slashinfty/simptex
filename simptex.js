document.getElementById('generate').addEventListener('click', generate);

function generate() {
    let size = '';
    switch (document.getElementById('size').value) {
        case 'tiny':
            size = String.raw`\tiny `;
            break;
        case 'small':
            size = String.raw`\small `;
            break;
        case 'medium':
            break;
        case 'large':
            size = String.raw`\large `;
            break;
        case 'xlarge':
            size = String.raw`\LARGE `;
            break;
        case 'huge':
            size = String.raw`\huge `;
            break;
    }
    let bg = '';
    switch (document.getElementById('bg').value) {
        case 'transparent':
            break;
        case 'white':
            bg = String.raw`\bg{white}`;
            break;
        case 'black':
            bg = String.raw`\bg{black}`;
            break;
    }
    const url = `https://latex.codecogs.com/png.image?${encodeURIComponent(size.concat(String.raw`\dpi{150}`, bg, document.getElementById('input').value))}`
    document.getElementById('eq').src = url;
}