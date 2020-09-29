
$(document).on("click","ul.nav li.parent > a ", function(){          
  $(this).find('i').toggleClass("fa-minus");      
}); 
$(".sidebar span.icon").find('em:first').addClass("fa-plus");

// $('#calendar').datepicker({
//   });

$("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
  
$(".select-image").change(function(){
  var file = $(this)[0].files[0];
  var imageChange = $(this).parent().parent().parent().children('.position-relation-img').children('.image-logo');
  console.log(imageChange);
  var patterImage = new RegExp("image/*");
  if(!patterImage.test(file.type)) {
          alert("Please choose image");
  } else {
          var fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = function(e) {
            imageChange.attr("src",e.target.result);
                  // $(this).parent().parent().parent().children('.image-logo').attr("src",e.target.result);
          }
  }
});

$(document).ready(function(){
  $(".label-title-form-interface").click(function(){
    if($(this).parent().children('.content-div-form-interface').is(':hidden')){
      $(this).parent().children('.content-div-form-interface').slideDown();
      $(this).children('span').removeClass('fa fa-angle-down');
      $(this).children('span').addClass('fa fa-angle-up');
    }else{
      $(this).parent().children('.content-div-form-interface').slideUp();
      $(this).children('span').removeClass('fa fa-angle-up');
      $(this).children('span').addClass('fa fa-angle-down');
    }
  });

  $('.col-md-12.col-lg-5.col-md-12.col-lg-5-custom .content-div').click(function(e){
    var items = $('.col-md-12.col-lg-5.col-md-12.col-lg-5-custom .content-div');
    for(var i = 0; i < items.length; i++){
      items[i].classList.remove("mystyle");
    }
    $(this).delay(1000).addClass('mystyle');
    // var itemWidthAndHeight = $(this).children('.size-image').children('.width-and-height');
    // var btnClose = $(this).children('.size-image').children('.content-image-and-button').children('.position-relation-img').children('.btn-btn-close-custom');
    // var btnActiceImage = $(this).children('.size-image').children('.content-image-and-button').children('ul');
    // itemWidthAndHeight.attr("style","display:block;");
    // btnClose.attr("style","display:block;");
    // btnActiceImage.attr("style","display:flex;");
    // $(this).attr("style","background:#D7F1FE;")
  })
  $('.btn-btn-zoom-img>a').click(function(e){
    var getSrc = $(this).parent().parent().children('.image-logo').attr('src');
    $('#exampleModalCenter .modal-body>img').attr('src',getSrc);
    var arrGetName = getSrc.split("/");
    var lastName = arrGetName.length - 1;
    $('#exampleModalCenter .modal-title').html(arrGetName[lastName]);
  })

  $("#picker1").colorPick({
    'initialColor' : '#009E0F',
    'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"],
    'onColorSelected': function() {
      console.log("The user has selected the color: " + this.color);
      
      $('.two-color')[0].style.backgroundColor = this.color;
      $('.three-color')[0].style.backgroundColor = this.color;
      $('.four-color')[0].style.backgroundColor = this.color;

      let startNumber1 = $('#picker1').css('background-color').indexOf("(") + 1;
      let endNumber1 = $('#picker1').css('background-color').indexOf(")");
      let arrNumberColor1 = $('#picker1').css('background-color').substring(startNumber1, endNumber1).split(",");

      let startNumber2 = $('#picker2').css('background-color').indexOf("(") + 1;
      let endNumber2 = $('#picker2').css('background-color').indexOf(")");
      let arrNumberColor2 = $('#picker2').css('background-color').substring(startNumber2, endNumber2).split(",");

      for(var i = 0 ; i < $('.three-color').length ; i++){
          if(i == 1){
            $('.three-color')[i].style.backgroundColor = "rgb("+(parseInt(arrNumberColor1[0]) + parseInt(arrNumberColor2[0]))/2 + "," + (parseInt(arrNumberColor1[1]) + parseInt(arrNumberColor2[1]))/2 + "," + (parseInt(arrNumberColor1[2]) + parseInt(arrNumberColor2[2]))/2 + ")";
          }
      }

      for(var i = 0 ; i < $('.four-color').length ; i++){
        if(i == 1){
          $('.four-color')[i].style.backgroundColor = "rgb("+(parseInt(arrNumberColor1[0]) + parseInt(arrNumberColor2[0]))/3 + "," + (parseInt(arrNumberColor1[1]) + parseInt(arrNumberColor2[1]))/3 + "," + (parseInt(arrNumberColor1[2]) + parseInt(arrNumberColor2[2]))/3 + ")";
        }else if(i == 2){
          $('.four-color')[i].style.backgroundColor = "rgb("+((parseInt(arrNumberColor1[0]) + parseInt(arrNumberColor2[0])) * 2 )/3 + "," + ((parseInt(arrNumberColor1[1]) + parseInt(arrNumberColor2[1])) * 2)/3 + "," + ((parseInt(arrNumberColor1[2]) + parseInt(arrNumberColor2[2])) * 2)/3 + ")";
        }
      }

      this.element.css({'backgroundColor': this.color, 'color': this.color});
    }
  });

  $("#picker2").colorPick({
    'initialColor' : '#DADEDF',
    'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"],
    'onColorSelected': function() {
      console.log("The user has selected the color: " + this.color)
      $('.two-color')[1].style.backgroundColor = this.color;
      $('.three-color')[2].style.backgroundColor = this.color;
      $('.four-color')[3].style.backgroundColor = this.color;

      let startNumber1 = $('#picker1').css('background-color').indexOf("(") + 1;
      let endNumber1 = $('#picker1').css('background-color').indexOf(")");
      let arrNumberColor1 = $('#picker1').css('background-color').substring(startNumber1, endNumber1).split(",");

      let startNumber2 = $('#picker2').css('background-color').indexOf("(") + 1;
      let endNumber2 = $('#picker2').css('background-color').indexOf(")");
      let arrNumberColor2 = $('#picker2').css('background-color').substring(startNumber2, endNumber2).split(",");

      for(var i = 0 ; i < $('.three-color').length ; i++){
          if(i == 1){
            $('.three-color')[i].style.backgroundColor = "rgb("+(parseInt(arrNumberColor1[0]) + parseInt(arrNumberColor2[0]))/2 + "," + (parseInt(arrNumberColor1[1]) + parseInt(arrNumberColor2[1]))/2 + "," + (parseInt(arrNumberColor1[2]) + parseInt(arrNumberColor2[2]))/2 + ")";
          }
      }

      for(var i = 0 ; i < $('.four-color').length ; i++){
        if(i == 1){
          $('.four-color')[i].style.backgroundColor = "rgb("+(parseInt(arrNumberColor1[0]) + parseInt(arrNumberColor2[0]))/3 + "," + (parseInt(arrNumberColor1[1]) + parseInt(arrNumberColor2[1]))/3 + "," + (parseInt(arrNumberColor1[2]) + parseInt(arrNumberColor2[2]))/3 + ")";
        }else if(i == 2){
          $('.four-color')[i].style.backgroundColor = "rgb("+((parseInt(arrNumberColor1[0]) + parseInt(arrNumberColor2[0])) * 2 )/3 + "," + ((parseInt(arrNumberColor1[1]) + parseInt(arrNumberColor2[1])) * 2)/3 + "," + ((parseInt(arrNumberColor1[2]) + parseInt(arrNumberColor2[2])) * 2)/3 + ")";
        }
      }

      this.element.css({'backgroundColor': this.color, 'color': this.color});
    }
  });

  $('.textEdit').keyup(function(e){
    $(this).parent().children('button').children('i').removeClass('fa fa-pencil').addClass('fa fa-check');
  })
  $('.saveText').click(function(e){
    $(this).children('i').removeClass('fa fa-check').addClass('fa fa-pencil');
  })
});
