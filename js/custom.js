
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
    $(this).addClass('mystyle');
    // var itemWidthAndHeight = $(this).children('.size-image').children('.width-and-height');
    // var btnClose = $(this).children('.size-image').children('.content-image-and-button').children('.position-relation-img').children('.btn-btn-close-custom');
    // var btnActiceImage = $(this).children('.size-image').children('.content-image-and-button').children('ul');
    // itemWidthAndHeight.attr("style","display:block;");
    // btnClose.attr("style","display:block;");
    // btnActiceImage.attr("style","display:flex;");
    // $(this).attr("style","background:#D7F1FE;")
  })
});
