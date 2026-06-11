const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target =
        +counter.dataset.target;

        const value =
        +counter.innerText;

        const increment =
        target / 100;

        if(value < target){

            counter.innerText =
            Math.ceil(value + increment);

            setTimeout(update,20);

        }else{

            counter.innerText =
            target;
        }
    };

    update();

});