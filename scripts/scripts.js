function ativarItem(elementoClicado) {
    // Remove a classe 'active' de todos os links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));
    // Adiciona a classe 'active' somente ao que foi clicado
    elementoClicado.classList.add('active');
}
function restaurantes(){
    document.getElementById("capa").innerHTML = 
        `<div class="quadro1">
            <ul>
                <li><a id="aneis" href="#" onclick="aneis()">Anéis de Maracajaú</a></li>
                <li><a id="parrachos" href="#" onclick="parrachos()">Parrachos Praia Clube</a></li>
                <li><a id="caribe" href="#" onclick="caribe()">Caribe de Maracajaú</a></li>
                <li><a id="portal" href="#" onclick="portal()">Portal de Maracajaú</a></li>
                <li><a id="paje" href="#" onclick="paje()">O Pajé</a></li>
                <li><a id="brisa" href="#" onclick="brisa()">Brisa do Mar</a></li>
                <li><a id="esquina" href="#" onclick="esquina()">Esquina Parrachos</a></li>
                <li><a id="guedes" href="#" onclick="guedes()">Seu Guedes</a></li>
                <li><a id="dunas" href="#" onclick="dunas()">Dunas Restaurante</a></li>
                <li><a id="ponto" href="#" onclick="ponto()">Ponto de encontro</a></li>
                <li><a id="tereza" href="#" onclick="tereza()">Tereza Pança</a></li>
                <li><a id="cacua" href="#" onclick="cacua()">Caçuá</a></li>
                <li><a id="bikibu" href="#" onclick="bikibu()">Bikibu</a></li>
                <li><a id="buji" href="#" onclick="buji()">Buji</a></li>
                <li><a id="bistro" href="#" onclick="bistro()">Maracajaú Bistrô</a></li>
                <li><a id="sabor" href="#" onclick="sabor()">Sabor na casa</a></li>
                <li><a id="frutos" href="#" onclick="frutos()">Frutos de Goiás</a></li>
                <li><a id="mana" href="#" onclick="mana()">Maná Burguer</a></li>
                <li><a id="siri" href="#" onclick="siri()">O Siri Cascudo</a></li>
                <li><a id="palhoca" href="#" onclick="palhoca()">Palhoça Gourmet</a></li>
            </ul>
        </div>`
}
function hospedagens(){
    document.getElementById("capa").innerHTML = 
        `<div class="quadro1">
            <ul>
                <li>Hospedagem 1</li>
                <li>Hospedagem 2</li>
                <li>Hospedagem 3</li>
            </ul>
        </div>`
}
function oqueFazer(){
    document.getElementById("capa").innerHTML = 
        `<div class="quadro1">
            <ul>
                <li>O que fazer 1</li>
                <li>O que fazer 2</li>
                <li>O que fazer 3</li>
            </ul>
        </div>`
}
function contato(){
    document.getElementById("capa").innerHTML = 
        `<div class="quadro1">
            <ul>
                <li>Contato 1</li>
                <li>Contato 2</li>
                <li>Contato 3</li>
            </ul>
        </div>`
}
