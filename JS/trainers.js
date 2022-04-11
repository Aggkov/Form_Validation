$(document).ready(function () {

    $('.dropdown-toggle').dropdown();

    $("#firstname-error").hide();
    $("#lastname-error").hide();
    $("#email-error").hide();
    $("#password-error").hide();

    var error_fname = false;
    var error_lname = false;
    var error_email = false;
    var error_password = false;


    $("#firstname").focusout(function () {
        checkFirstName();
    });
    $("#lastname").focusout(function () {
        checkLastName();
    });

    $("#email").focusout(function () {
        checkEmail();
    });
    $("#password").focusout(function () {
        checkPassword();
    });
    // $(".form-check-input").click(function () {
    //     validCheckbox();
    // })

    function checkFirstName() {
        var pattern = /^[a-zA-Z]*$/;
        var firstName = $("#firstname").val();

        if (pattern.test(firstName) && firstName !== "") {
            $("#firstname-error").hide();
            $("#firstname").css("border-bottom", "2px solid #34f458");

            $("input[type=text]").val(function () {
                return this.value.toUpperCase();
            })
            error_fname = false;
        }
        else {
            $("#firstname-error").html("Should contain only characters");
            $("#firstname-error").show();
            $("#firstname").css("border-bottom", "2px solid #f90a0a");
            error_fname = true;
        }
    }

    function checkLastName() {
        var pattern = /^[a-zA-Z]*$/;
        var lastName = $("#lastname").val();

        if (pattern.test(lastName) && lastName !== "") {
            $("#lastname-error").hide();
            $("#lastname").css("border-bottom", "2px solid #34f458");
            $("input[type=text]").val(function () {
                return this.value.toUpperCase();
            })
            error_lname = false;

        }
        else {
            $("#lastname-error").html("Should contain only characters");
            $("#lastname-error").show();
            $("#lastname").css("border-bottom", "2px solid #f90a0a");

            error_lname = true;
        }
    }

    function checkEmail() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#email").val();

        if (pattern.test(email) && email !== "") {
            $("#email-error").hide();
            $("#email").css("border-bottom", "2px solid #34f458");
            error_email = false;

        }
        else {
            $("#email-error").html("Invalid Email");
            $("#email-error").show();
            $("#email").css("border-bottom", "2px solid #f90a0a");
            error_email = true;

        }
    }

    function checkPassword() {
        var password_length = $("#password").val().length;

        if (password_length < 8) {
            $("#password-error").html("Password must be at least 8 Characters");
            $("#password-error").show();
            $("#password").css("border-bottom", "2px solid #f90a0a");
            error_password = true;

        }
        else {
            $("#password-error").hide();
            $("#password").css("border-bottom", "2px solid #34f458");
            error_password = false;

        }
    }



    $("#registration").submit(function () {

        checkFirstName();
        checkLastName();
        checkEmail();
        checkPassword();
        // validCheckbox();


        if (error_fname === false && error_lname === false && error_email === false && error_password === false) {

            alert("Registration Successfull");


            // var fname = $("#firstname").val();
            // var lname = $("#lastname").val();
            // var dateOfBirth = $("#date-of-birth").val();
            // var email = $("#email").val();


            // $("#studentsBody").append($("<tr>")
            //     .append($("<td>").append($($(fname))))
            //     .append($("<td>").append($($(lname))))
            //     .append($("<td>").append($($(dateOfBirth))))
            //     .append($("<td>").append($($(email)))))


            // console.log(pair[0] + ': ' + pair[1]);
            // tbody.innerHTML = formData;
            // $("#studentsBody").append($("<tr>")
            //     .append($("<td>").append($(pair[1]))));

            // $("#studentsBody").append(pair[0]);




            return true;
        } else {
            alert("Please Fill the form Correctly");
            return false;
        }
    });

});