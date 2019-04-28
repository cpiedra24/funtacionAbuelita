// var $form = $('form#test-form'),
//   url = 'https://script.google.com/macros/s/AKfycbxT6noDUFGTdY2EICMi-I75j9Cv64Ni9_dp8Dj-Ztcg4Bjfzi7J/exec'

// $(document).ready(function () {

//     var name = $('#name').val();
//     var email = $('#email').val();
//     var phone = $('#phone').val();
//     var project = $('#project_name').val();
  
//     $.ajax({
//       url: "https://script.google.com/macros/s/AKfycbxT6noDUFGTdY2EICMi-I75j9Cv64Ni9_dp8Dj-Ztcg4Bjfzi7J/exec",
//       data: {
//         name: name,
//         email: email,
//         phone: phone,
//         project: project
//       },
//       type: "POST",
//       dataType: "jsonp",
//       statusCode: {
//         0: function () {
//           console.log("si");
//           // window.location.replace("ThankYou.html");
//         },
  
//         200: function () {
//           console.log("no");
//           // window.location.replace("ThankYou.html");
//         }
//       }
//     });

// });

  // $('form.test-form').submit(function (e) {

  //   var name = $('#name').val();
  //   var email = $('#email').val();
  //   var phone = $('#phone').val();
  //   var project = $('#project_name').val();

  //   $.ajax({
  //     url: "https://script.google.com/macros/s/AKfycby-izRNCaOu0QN1s47wFUZyELsG-pcPYFhKk7fkJ01MPoiqVfY/exec",
  //     data: {
  //       name: name,
  //       email: email,
  //       phone: phone,
  //       project: project
  //     },
  //     type: "POST",
  //     dataType: "json",
  //     statusCode: {
  //       0: function () {
  //         console.log("si");
  //         // window.location.replace("ThankYou.html");
  //       },

  //       200: function () {
  //         console.log("no");
  //         // window.location.replace("ThankYou.html");
  //       }
  //     }
  //   });
  // })


// $(document).ready(function () {

//   var script_url = "https://script.google.com/macros/s/AKfycby-izRNCaOu0QN1s47wFUZyELsG-pcPYFhKk7fkJ01MPoiqVfY/exec/";
//   function insert_value() {
//       var nombre = $("#Nombre").val();
//       var correo = $("#Correo").val();
//       var proyecto = $("#Proyecto").val();
//       var url = script_url + "callback=ctrlq&Nombre=" + nombre + "&Correo=" + correo + "&Proyecto=" + proyecto + "&action=insert";
//       var request = jQuery.ajax({
//           crossDomain: true,
//           url: url,
//           method: "GET",
//           dataType: "jsonp"
//       });
//       // $("#resetForm")[0].reset();
//   }
//   function ctrlq() {
//       alert('Proceso realizado...');
//   }
// });