

 $(document).ready(function () {
$(".togglar2").click(function () {
    $(".navList").toggleClass("active");
  });

   $(".navList li a").click(function () {
    $(".navList").removeClass("active");
         $(".togglar2").removeClass("active");
  });
 });
