$(() => {

  $(".devour").on("click", function() {
    var burgerId = $(this).attr("burger");
    $.ajax(`/api/burgers/${burgerId}`, { type: "PUT" })
      .then(response => {
        console.log(response);
        location.reload();
      });
  });

  $("#submit-burger").on("click", function() {
    var burgerName = $("#burger-name").val().trim();
    if (!burgerName) return console.log("Empty name. Burger not submitted");
    $.ajax("/api/burgers/", {
      type: "POST",
      data: { name: burgerName }
    }).then(response => {
      console.log(response);
      location.reload();
    });
  });

});