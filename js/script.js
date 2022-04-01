// Ancoragem suavizada
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
     	e.preventDefault();

     	document.querySelector(this.getAttribute('href')).scrollIntoView({
     	    behavior: 'smooth'
    	});
   	});
});

// Função ativada ao clicar no botão "Enviar"
function enviarSujestao(){
	alert("Sujestão enviada com sucesso!")
}