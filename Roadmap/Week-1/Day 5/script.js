

function counter(min, max){
    let count = 0;

    let incrBtn = document.getElementById('incr-btn');
    let decrBtn = document.getElementById('decr-btn');
    let countSpan = document.getElementById('count');
    let msg = document.getElementById('msg');

    function render(){
        countSpan.innerText = `${count}`;
    }

    function increment(){
        if(count < max){
            //msg.innerText = "";
            msg.style.display = "none";
            count++;
        }
        else{
            msg.style.display = "block";
            msg.innerText = "Maximum count reached!";
        }
        render();
    }

    function decrement(){
        if(count > min){
            msg.style.display = "none";
            count--;
        }
        else{
            msg.style.display = "block";
            msg.innerText = "Minimum count reached!"
        }
        render();
    }

    incrBtn.addEventListener("click", increment);
    decrBtn.addEventListener("click", decrement);
}

counter(-10, 4);

