$(document).ready(function () {
    $('.dropdown-toggle').dropdown();



    function validCheckbox() {

        if ($("input:checkbox").prop("checked")) {
            if ($("input:checkbox:checked").length > 1) {
                alert("Courses picked succesfully");
            }
            else {
                alert("Course picked succesfully");
            }
            return true;
        }
        else {
            alert("Please select at least one Course")
            return false;
        }

    }

    $("#registration").submit(function () {
        validCheckbox();

    });

})