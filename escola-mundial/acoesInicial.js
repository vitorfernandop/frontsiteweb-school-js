var botaoAluno = document.querySelector(".aluno");
botaoAluno.addEventListener("click", function (event){
    event.preventDefault();
    window.open ("portalAluno.html");
});

var botaoProfessor = document.querySelector(".professor");
botaoProfessor.addEventListener ("click", function (event){
    event.preventDefault();
    window.open ("portalProfessor.html");
});

var botaoLoginAluno = document.querySelector (".submitForm");