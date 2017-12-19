/* ----------------------------------------------------------------
 * Centennial College - MAP712 - Web Techs - Mobile Platforms
 * Fernando Ito - Test - 12/01/2017
 * ---------------------------------------------------------------- */

  function posts2()
  {
    var URL='https://zv-rest-server.herokuapp.com/users';

    $.getJSON(URL, function fetchPosts(data) {
      $("#panel").html( data.map(function listAllPatients(post) {
        var patient = $( "<div class='patient'></div>" )
        var patientBody = $( "<div class='patient-body'></div>")
        patientBody.append(
          $("<h4 class='patient-name'>" + post.name + "</h4>"),
          $("<p class='patient-age'>" + post.age + "</p>"),
        )
        patient.append(patientBody)
        return patient
      }))
    })
  }
