let
    spacing = document.querySelector('#spacing'),
    blur    = document.querySelector('#blur'),
    base    = document.querySelector('#base'),
    img     = document.querySelector('img');


    [spacing, blur, base].forEach((elm) => {
        elm.addEventListener('input', function(e) {
            switch(e.target.id) {
                case 'spacing':
                    img.style.setProperty('--spacing', e.target.value + "px");
                    break;
                case 'blur': 
                    img.style.setProperty('--blur', e.target.value + "px");
                    break;
                case 'base':
                    img.style.setProperty('--color', e.target.value);
                    break;
            }
        });
    });