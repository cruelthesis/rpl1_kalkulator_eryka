var display = document.getElementById('display');

    function percent(){
        display.value = display.value / 100;
    }

    // function samaDengan(){
    //     var hasil = eval(display.value);

    //     if(hasil === Infinity || hasil === -Infinity){
    //         alert("haaaaaa");
    //     }else{
    //         display.value = result;
    //     }
    // }

    function appendChar(char){
        var lastChar = display.value.slice(-1);


        // if(infinity === Infinity){
        //     alert('operasi gagal');
        // } else{
        //     if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*'){
        //         display.value = display.value.slice(0,-1) + char;
        //     }else if(!display.value.includes(char)){
        //         display.value += char;
        //     }
        // }

        if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*')
        {
            display.value = display.value.slice(0,-1) + char;
        } else if(!display.value.includes(char))
        {
            display.value += char;
        }
    }

    // function equal(){
    //     var hasil = display.value;

    //     var infinity = eval(hasil);
    //     if(infinity === Infinity){
    //         alert('woy');
    //     }else{
    //         display.value = eval(hasil);
    //     }


    // }