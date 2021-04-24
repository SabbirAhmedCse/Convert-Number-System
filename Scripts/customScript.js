/*-------------------------------
    Convert Decimal to All
-------------------------------*/

let decimal = () => {
    let decimalId = parseFloat(document.getElementById('decimalId').value);
    console.log(decimalId);
    if(decimalId != 'NAN'){
    
        
    document.getElementById('binaryId').value = decimalId.toString(2) || 0;
    document.getElementById('octalId').value = decimalId.toString(8);
    document.getElementById('hexadecimalId').value = decimalId.toString(16).toUpperCase();
    }
    else{document.getElementById('binaryId').value = '0';
    document.getElementById('octalId').value = 0;
    document.getElementById('hexadecimalId').value = 0;
    }

}

/*-------------------------------
    Convert Binary to All
-------------------------------*/

let binary = () => {
    let binaryId = document.getElementById('binaryId').value;
    const array = binaryId.toString().split('');
    console.log(array);
    for (var i of array) {
        if (i != '0' && i != '1' && i != '.' && i != 'N' && i != 'a') {
            alert('Please Enter Valid Binary Number');
        } 
        else {
            binaryId = parseInt(document.getElementById('binaryId').value, 2) || 0;
            document.getElementById('decimalId').value = binaryId.toString(10);
            document.getElementById('octalId').value = binaryId.toString(8);
            document.getElementById('hexadecimalId').value = binaryId.toString(16).toUpperCase() || 0;
        }
    }




}

/*-------------------------------
    Convert Octal to All
-------------------------------*/

let octal = () => {

    let octalId = document.getElementById('octalId').value;

    const array = octalId.toString().split('');
    console.log(array);
    for (var i of array) {
        if (i != '0' && i != '1' && i != '2' && i != '3' && i != '4' && i != '5' && i != '6' && i != '7' && i != 'N' && i != 'a') {
            alert('Please Enter Valid Octal Number');
        } 
        else {
            octalId = parseInt(document.getElementById('octalId').value, 8);
            document.getElementById('decimalId').value = octalId.toString(10);
            document.getElementById('binaryId').value = octalId.toString(2);
            document.getElementById('hexadecimalId').value = octalId.toString(16).toUpperCase();
        }
    }

}

/*-------------------------------
    Convert Hexa Decimal to All
-------------------------------*/

let hexaDecimal = () => {
    let hexadecimalId = parseInt(document.getElementById('hexadecimalId').value, 16);

    document.getElementById('decimalId').value = hexadecimalId.toString(10);
    document.getElementById('binaryId').value = hexadecimalId.toString(2);
    document.getElementById('octalId').value = hexadecimalId.toString(8);
}

/*-------------------------------
          Buttom to Top
-------------------------------*/


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}