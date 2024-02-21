
let file;
let inputElement = document.getElementById('file');

let imageElement = document.getElementById('img');

inputElement.onchange = (e) =>{
    file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => { 
        img.src = e.target.result; 
    };
    reader.readAsDataURL(file);
}

