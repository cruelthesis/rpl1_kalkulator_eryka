

function insert(num) {
    var textarea = document.getElementById('display');
    var jumlah = textarea.value;
    var operator = ['+', '-', '*', '/', '.'];

    if (jumlah === '0' && operator.includes(num)) {
        if (jumlah === '0' && num === '.') {
            textarea.value = jumlah + num
        } else {
            return;
        }
    }

    if (jumlah === '0' && num === '0') {
        if (jumlah.length === 1 && num === '0') {
            return;
        } else {
            textarea.value = jumlah + num;
        }
    } else {
        if (jumlah.length === 1 && jumlah === '0') {
            textarea.value = num;
        } else {
            textarea.value = jumlah + num;
        }
    }

    if (operator.includes(num)) {
        var las = jumlah.charAt(jumlah.length - 1);

        if (operator.includes(las)) {
            textarea.value = jumlah.slice(0, -1) + num;
        } else {
            textarea.value = jumlah + num;
        }
    }
}

function clearAll() {
    var display = document.getElementById('display');
    display.value = '';
}

function del() {
    var display = document.getElementById('display');
    var hasil = display.value;

    if (hasil.length === 1) {
        display.value = '0';
    } else {
        display.value = hasil.substring(0, hasil.length - 1);
    }
}

// function equal() {
//     var display = document.getElementById('display');
//     var hasil = display.value;

//     var las = hasil.charAt(hasil.length - 1);
//     if (las.includes('%')) {
//         var nilai = hasil.substring(0, hasil.length - 1);
//         display.value = (nilai / 100);
//     } else {
//         var infinity = eval(hasil);

//         if(infinity === Infinity){
//             alert ('Operasi gagal');
//             display.value = 'Error';
//         }else{
//             display.value = eval(hasil);
//         }
//         // display.value = eval(hasil);
//     }
// }
function equal() {
    var display = document.getElementById('display');
    var hasil = display.value;

    var infinity = eval(hasil);
    if (infinity === Infinity) {
        alert ('Operasi gagal');
        display.value = 'Error';
    } else {
        display.value = eval(hasil);
    }
}

function percent(){
    var display = document.getElementById('display');

    display.value = display.value/100;
}