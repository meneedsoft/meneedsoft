/* Campos de Formulario */
const inputforms = document.querySelectorAll('.formcontent input');

if(inputforms){
    inputforms.forEach(function(input){
        if(input.value.trim() !== '')
            input.parentNode.classList.add('active');
    
        input.addEventListener('blur', function(e){
            if(e.target.value.trim() !== ''){
                input.parentNode.classList.add('active'); 
            }else{
                input.parentNode.classList.remove('active'); 
            }
        });
    });
}
/* Fin Campos de Formulario */

/* Integración Firebase */
const form = document.getElementById('contactForm');

if(form){
    form.addEventListener('submit', contactForm);
}

function contactForm(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre'); 
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById("mensaje");
    
    const data = {
    'nombre': nombre.value,
    'email': email.value,
    'telefono': telefono.value,
    'asunto': asunto.value,
    'mensaje': mensaje.value
    };

    saveContactForm(data);
    form.reset();
}

function saveContactForm(data) {
    success = document.getElementById("success");
    error = document.getElementById("error");

    success.classList.remove("d-block")
    success.classList.add("d-none")

    error.classList.remove("d-block")
    error.classList.add("d-none")

    firebase.database().ref('contact').push(data)
        .then(function(){
            success.classList.add("d-block")
        })
        .catch(function(){
            error.classList.add("d-block")
        });
};
/* Fin Integración Firebase */

/* Nav */
const btnMenu   = document.querySelector('.btn-menu');
const menu      = document.querySelector('.menu');

btnMenu.addEventListener('click', function() {
    menu.classList.toggle('open');
});
/* Fin Nav */