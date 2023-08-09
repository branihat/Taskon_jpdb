$("#rollNo").focus();

function validateAndGetFormData() {
    var rollNoVar = $("#rollNo").val();
    if (rollNoVar === "") {
        alert("Roll No is a required value");
        $("#rollNo").focus();
        return "";
    }
    var fullNameVar = $("#fullName").val();
    if (fullNameVar === "") {
        alert("Full Name is a required value");
        $("#fullName").focus();
        return "";
    }
    var classVar = $("#class").val();
    if (classVar === "") {
        alert("Class is a required value");
        $("#class").focus();
        return "";
    }
    var birthDateVar = $("#birthDate").val();
    if (birthDateVar === "") {
        alert("Birth Date is a required value");
        $("#birthDate").focus();
        return "";
    }
    var addressVar = $("#address").val();
    if (addressVar === "") {
        alert("Address is a required value");
        $("#address").focus();
        return "";
    }
    var enrollmentDateVar = $("#enrollmentDate").val();
    if (enrollmentDateVar === "") {
        alert("Enrollment Date is a required value");
        $("#enrollmentDate").focus();
        return "";
    }
    var jsonStrObj = {
        RollNo: rollNoVar,
        FullName: fullNameVar,
        Class: classVar,
        BirthDate: birthDateVar,
        Address: addressVar,
        EnrollmentDate: enrollmentDateVar
    };
    return JSON.stringify(jsonStrObj);
}

function saveStudent() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90931350|-31949322854852807|90950639", jsonStr, "SCHOOL-DB", "STUDENT-TABLE");

    jQuery.ajaxSetup({
        async: false
    });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
        "http://api.login2explore.com:5577", "/api/iml");

    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({
        async: true
    });

    resetForm();
}

function resetForm() {
    $("#rollNo").val("");
    $("#fullName").val("");
    $("#class").val("");
    $("#birthDate").val("");
    $("#address").val("");
    $("#enrollmentDate").val("");
    $("#rollNo").focus();
}
