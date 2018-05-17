$('#submit').click(compare);

// function compare(){

//     var leftSide = $('#a').val();
//     var rightSide = $('#b').val();

//     if(leftSide > rightSide){
//         $('#comparison').html(">");
//     }
//     if(leftSide < rightSide){
//         $('#comparison').html("<");
//     }
//     if(leftSide == rightSide){
//         $('#comparison').html("=");
//     }
// }


function compare(){

    var leftSide = $('#a').val();
    var rightSide = $('#b').val();

    if(leftSide == rightSide){
        $('#comparison').html("=");

    } else {
        if(leftSide > rightSide){
            $('#comparison').html(">");
        }
        if(leftSide < rightSide){
            $('#comparison').html("<");
        }
    }
}