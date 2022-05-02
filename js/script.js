// Ancoragem suavizada
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
     	e.preventDefault();

     	document.querySelector(this.getAttribute('href')).scrollIntoView({
     	    behavior: 'smooth'
    	});
   	});
});

var mural = window.document.querySelector("div#show-mural")

function openProjeto1(){
	mural.innerHTML = `<div id="mural">
						<div class="mural-close">
							<p class="btn-fechar" onclick="fecharProjeto()">X</p>
						</div>
						<div class="conteudo-mural">
							<div class="mural-img">
								<img src="images/fogao.png" alt="img-fogao">
							</div>
							<div class="mural-txt">
								<h1 class="titulo-mural">Utilize o fogão racionalmente</h1><br>
								<p class="texto-mural">Quando você usa o fogão, a queima do gás de cozinha produz gás carbônico e gás metano. Esses dois gases sobem para a alta atmosfera e causam o efeito-estufa, ou-seja aumentam a temperatura da Terra. Isso
									Produz mudanças climáticas.<br><br>
									
									Quando mais racionalmente você utilizar o fogão, menos prejuízos ao meio ambiente global estará causando.
									Por exemplo, o fogo brando e o uso de panelas de pressão ajudam a economizar gás. Use o forno com moderação. Aproveite o seu calor para assar/aquecer coisas diferentes.
									</p>
							</div>
						</div>      
					</div>`
}

function openProjeto2(){
	mural.innerHTML = `<div id="mural">
						<div class="mural-close">
							<p class="btn-fechar" onclick="fecharProjeto()">X</p>
						</div>
						<div class="conteudo-mural">
							<div class="mural-img">
								<img src="images/planta.png" alt="img-fogao">
							</div>
							<div class="mural-txt">
								<h1 class="titulo-mural">Proteja a vegetação</h1><br>
								<p class="texto-mural">As arvores são uma extensão viva da Terra. Elas têm uma história evolutiva e são importantes componentes do equilíbrio ecossistêmico. Não são apenas fontes de madeira.<br><br>

								As árvores da rua e da sua cidade são um patrimônio público. Para cortá-las necessita de autorização especial. Exija a apresentação dessa autorização, se alguém estiver cortando-as.<br><br>

								Na sua associação, estimule as práticas de plantio em seu bairro. Cadastre as árvores plantadas (uma pequena plaqueta de alumínio, contendo o nome da arvore, quando foi plantada e quem plantou).
								</p>
							</div>
						</div>      
					</div>`
}

function openProjeto3(){
	mural.innerHTML = `<div id="mural">
						<div class="mural-close">
							<p class="btn-fechar" onclick="fecharProjeto()">X</p>
						</div>
						<div class="conteudo-mural">
							<div class="mural-img">
								<img src="images/reciclagem.png" alt="img-fogao">
							</div>
							<div class="mural-txt">
								<h1 class="titulo-mural">Apoie as iniciativas de reciclagem</h1><br>
								<p class="texto-mural">
								Sempre que encontrar lugares onde a coleta seletiva estiver implantada, colabore. Coloque os resíduos nos coletores indicados. Faça a sua parte.<br><br>
								Cada item reciclado significa menos consumo de água, energia elétrica e matéria-prima, e desflorestamentos de uma forma geral.<br><br>
								Se no seu bairro, na sua escola ou no trabalho ainda não houver coleta seletiva, busque ajuda para implantá-la. Hoje, o lixo não deve mais representar problemas e sim soluções.<br><br>
								É claro que não vamos salvar o mundo apenas reciclando latinhas, mas esta atividade é uma importante parcela do processo de gestão ambiental (resolução dos desafios socioambientais) que, somada a outros, pode fazer a diferença.
								</p>
							</div>
						</div>      
					</div>`
}

function openProjeto4(){
	mural.innerHTML = `<div id="mural">
						<div class="mural-close">
							<p class="btn-fechar" onclick="fecharProjeto()">X</p>
						</div>
						<div class="conteudo-mural">
							<div class="mural-img">
								<img src="images/garrafa-card.png" alt="img-fogao">
							</div>
							<div class="mural-txt">
								<h1 class="titulo-mural">Reutilize materiais</h1><br>
								<p class="texto-mural">
								Desenvolva a cultura da reutilização e, com isso, reduza a produção de resíduos. Embalagens de lata, caixas de papelão, por exemplo, podem ter diversas outras utilidades, antes de enviá-las para a reciclagem ou, em muitos casos, para os aterros.<br><br>
								Outros exemplos:<br><br>
								<ul style="margin-left: 30px;">
									<li>As fraldas descartáveis (polietileno) poluem o ambiente por no mínimo, 400 anos. Dê preferência às fraldas de pano;</li>
									<li>Na cozinha, em vez de toalhas de papel (não recicláveis), utilize panos. Esses, uma vez lavados, estão prontos para reutilização.</li>
								</ul>
								
								</p>
							</div>
						</div>      
					</div>`
}

function openProjeto5(){
	mural.innerHTML = `<div id="mural">
						<div class="mural-close">
							<p class="btn-fechar" onclick="fecharProjeto()">X</p>
						</div>
						<div class="conteudo-mural">
							<div class="mural-img">
								<img src="images/quimico.png" alt="img-quimico">
							</div>
							<div class="mural-txt">
								<h1 class="titulo-mural">Cuidado com produtos químicos</h1><br>
								<p class="texto-mural">
								Muitos Produtos químicos de risco potencial chegam a nossas casas. São inseticidas, fungicidas, vernizes, tintas, medicamentos, cosméticos, materiais de limpeza, sabões e outros.<br><br>
								Atente para os avisos contidos nos rótulos. Muitos desses produtos, além de representarem sérios riscos à sua saúde, podem causar danos ao ambiente como um todo.<br><br>
								A maior parte dos recipientes desses produtos não deve ser reutilizada.<br><br>
								Medicamentos vencidos não podem ser depositados no lixo. Deixe-os nas farmácias para serem devolvidos aos seus fabricantes.
								</p>
							</div>
						</div>      
					</div>`
}

function openProjeto6(){
	mural.innerHTML = `<div id="mural">
						<div class="mural-close">
							<p class="btn-fechar" onclick="fecharProjeto()">X</p>
						</div>
						<div class="conteudo-mural">
							<div class="mural-img">
								<img src="images/omita.png" alt="img-nao-se-omita">
							</div>
							<div class="mural-txt">
								<h1 class="titulo-mural">Não se omita</h1><br>
								<p class="texto-mural">
								Sempre que um crime ambiental esteja sendo cometido em sua presença, aja! Quando você se cala se torna cúmplice.<br><br>
								Os seus direitos de um ambiente ecologicamente equilibrado estão sendo desrespeitados. Expresse a sua insatisfação.<br><br>
								Não se cale! Não se acomode e nem pense que os outros vão se resolver por você. Faça sua parte.
								Acione os órgãos ambientais locais, estaduais e/ou federais.<br><br>
								Denuncie. Eles estão lá para atender você.
								</p>
							</div>
						</div>      
					</div>`
}

function fecharProjeto(){
	mural.innerHTML = ``
}

var txtNome = window.document.querySelector('input#txt-nome')
var txtEmail = window.document.querySelector('input#txt-email')
var txtTelefone = window.document.querySelector('input#txt-telefone')
var txtSugestao = window.document.querySelector('textarea#txt-sugestao')

// Função ativada ao clicar no botão "Enviar"
function enviarsugestao(){
	if (txtNome.value != `` && txtEmail.value != `` && txtTelefone.value != `` && txtSugestao.value != ``) {
		alert("Sugestão enviada com sucesso!")
		txtNome.value = ``
		txtEmail.value = ``
		txtTelefone.value = ``
		txtSugestao.value = ``
		txtNome.style.border = "none"
		txtEmail.style.border = "none"
		txtTelefone.style.border = "none"
		txtSugestao.style.border = "none"
	} else {
		if(txtNome.value == ``) {
			txtNome.style.border = "2px red solid"
		}
		if(txtEmail.value == ``) {
			txtEmail.style.border = "2px red solid"
		}
		if(txtTelefone.value == ``) {
			txtTelefone.style.border = "2px red solid"
		}
		if(txtSugestao.value == ``) {
			txtSugestao.style.border = "2px red solid"
		}
		alert("Preencha todos os campos!")
	}
	
}