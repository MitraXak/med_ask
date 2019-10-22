function defdms(){
    $("#OMS").css("display", "none");
    $("#dms").css("color", "white");
    $("#oms").css("color", "black");
    $("#dms").css("background", "red");
    $("#dms").css("border", "none")
    $("#oms").css("background", "white");
    $("#oms").css({
        "border-top-left-radius": "5px",
        "border-bottom-left-radius": "5px",
        "border-bottom": "1px solid #b3b3b3",
        "border-top": "1px solid #b3b3b3",
        "border-left": "1px solid #b3b3b3",
        "border-right": "1px solid #b3b3b3"
    })
    return $("#DMS").css("display", "block");
}
function defoms(){
    $("#oms").css("background", "red");
    $("#dms").css("background", "white");
    $("#dms").css("color", "black");
    $("#oms").css("color", "white");
    $("#oms").css("border", "none");
    $("#DMS").css("display", "none");
    $("#dms").css({
        "border-top-right-radius": "5px",
        "border-bottom-right-radius": "5px",
        "border-bottom": "1px solid #b3b3b3",
        "border-top": "1px solid #b3b3b3",
        "border-right": "1px solid #b3b3b3",
        "border-left": "1px solid #b3b3b3"
    })
    return $("#OMS").css("display", "block");
}

