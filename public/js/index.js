$(document).ready(function (){
  addActions();

  $('#menuSmall').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'center', // Displays dropdown with edge aligned to the left of button
    stopPropagation:true // Stops event propagation
  });

  $(".menu").on('click', function(){
    alternaMenu(this);
  })

  $("#formContato").submit(function(e){
      enviaEmail(e);
  })

  $('.nav-menu a').click(function () {
    var activeElements = $('.menu-ativo');
    activeElements.removeClass('menu-ativo');
    $(this).addClass('menu-ativo');
  });
})

function addActions() {
  downloadCV()
  var date = new Date();
  var day = date.getDate();
  if(day < 10)
    day = "0" + day;
  var month = date.getMonth();
  month = getMonthName(month);
  var year = date.getFullYear();
  $("#dataAtual").text(day + " de " + month + " de " + date.getFullYear())

  preencheSkills();
}

function downloadCV() {
    var fileName = "cv/CV.pdf"
    var storage = firebase.storage();
    var pathReference = storage.ref(fileName);
    pathReference.getDownloadURL().then(function(url) {
      var button = document.getElementById('btnDownload');
      button.href = url;
  })
}


function enviaEmail(e) {
  e.preventDefault();
  var emailContent = {
      name: document.getElementById('name-field'),
      email: document.getElementById('email-field'),
      subject: document.getElementById('subject-field'),
      message: document.getElementById('textarea-field')
    }
    if(!emailContent.name.value || !emailContent.email.value || !emailContent.message.value){
      swal("", "Por favor, verifique os campos preenchidos.", "error")
    } else {
      emailjs.send(
        "gmail","cv_felipe",
        {
          name: emailContent.name.value,
          email: emailContent.email.value,
          subject: emailContent.subject.value,
          message: emailContent.message.value
        }).then(function(response){
          swal("", "E-mail enviado com sucesso", "success")
          $("#formContato").get(0).reset()
        }, function (err){
          swal("", "Erro ao enviar o e-mail: " + err, "error")
        });
    }
}

function preencheSkills(){
  var cSharp = document.getElementById('c#-skill');
  var skillJs = document.getElementById('js-skill');
  var skillJquery = document.getElementById('jquery-skill');
  var skillHtml = document.getElementById('html-skill');
  var skillSql = document.getElementById('sql-skill');
  var skillGit = document.getElementById('git-skill');
  var skillGulp = document.getElementById('gulp-skill');
  var skillNode = document.getElementById('node-skill');
  var skillLinq = document.getElementById('linq-skill');

  var star3 = '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-vazia.png"/>'+
                  '<img class="skills-img" src="../img/star-vazia.png"/>';

  var star45 = '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-metade.png"/>';
  var star4 = '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-vazia.png"/>';
  var star5 =     '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>'+
                  '<img class="skills-img" src="../img/star-cheia.png"/>';

  cSharp.innerHTML = star5;                
  skillLinq.innerHTML = star4;
  skillJs.innerHTML = star5;
  skillJquery.innerHTML = star45;
  skillNode.innerHTML = star3;
  skillGulp.innerHTML = star3;
  skillHtml.innerHTML = star5;
  skillSql.innerHTML = star5;
  skillGit.innerHTML = star45;
}

function alternaMenu(menu){
  if(menu.id == "home-menu"){
    $("#home-content").show();  
    $("#cv-content").hide();
    $("#projetos-content").hide();
    $("#contato-content").hide();
  } else if (menu.id == "cv-menu") {
    $("#home-content").hide();
    $("#cv-content").show();
    $("#projetos-content").hide();
    $("#contato-content").hide();
  }
  else if(menu.id == "projetos-menu"){
    $("#home-content").hide();
    $("#cv-content").hide();
    $("#projetos-content").show();
    $("#contato-content").hide();
  }
  else if(menu.id == "contato-menu"){
    $("#home-content").hide();
    $("#cv-content").hide();
    $("#projetos-content").hide();
    $("#contato-content").show();
  }
}

function getMonthName(month) {
  switch (month) {
     case 0:
      month = "Janeiro"
      break;
    case 1:
      month = "Fevereiro"
      break;
    case 2:
      month = "Março"
      break;
    case 3:
      month = "Abril"
      break;
    case 4:
      month = "Maio"
      break;
    case 5:
      month = "Junho"
      break;
    case 6:
      month = "Julho"
      break;
    case 7:
      month = "Agosto"
      break;
    case 8:
      month = "Setembro"
      break;
    case 9:
      month = "Outubro"
      break;
    case 10:
      month = "Novembro"
      break;
    case 11:
      month = "Dezembro"
      break;
    default:
        break;
  }

  return month;
}