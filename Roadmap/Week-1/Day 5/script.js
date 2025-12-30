

function counter(min, max){
    let count = 0;

    let prev1 = 0;
    let prev2 = 1;

    let incrBtn = document.getElementById('incr-btn');
    let decrBtn = document.getElementById('decr-btn');
    let countSpan = document.getElementById('count');
    let msg = document.getElementById('msg');

    function render(){
        countSpan.innerText = `${count}`;
    }

    // function incrementFib(){
    //     count = prev1+prev2;
    //     prev1 = prev2;
    //     prev2 = count;
    // }
     // function decrementFib(){
    //     count -= (prev1+prev2);
    //     prev1 = prev2;
    //     prev2 = count;
    // }

    function increment(){
        if(count < max){
            msg.style.display = "none";
            //count++;
            count = prev1+prev2;
            prev1 = prev2;
            prev2 = count;
        }
        else{
            msg.style.display = "block";
            msg.innerText = "Maximum count reached!";
        }
        render();
        toggleIncrBtnDisable();
    }

    function decrement(){
        if(count > min){
            msg.style.display = "none";
            //count--;
            count -= prev2;
            prev2 = prev1;
            //1 1 2 3 5 8 
        }
        else{
            msg.style.display = "block";
            msg.innerText = "Minimum count reached!"
        }
        render();
        toggleIncrBtnDisable();
    }
    function toggleIncrBtnDisable(){
        if(count >= max){
            incrBtn.disabled = true;
        }
        else{
            incrBtn.disabled = false;
        }
    }

    incrBtn.addEventListener("click", increment);
    decrBtn.addEventListener("click", decrement);

    toggleIncrBtnDisable();
} 

counter(-10, 10);

