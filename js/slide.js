const items = document.querySelectorAll('.item');
const controls = document.querySelectorAll('.control');
let item_actual = 0;

const slider = {
    init: () => {
        controls.forEach(control => control.addEventListener('click', (e) => { slider.clicked_control(e) }));
        controls[item_actual].classList.add('active');
        items[item_actual].classList.add('active');
    },
    next_slide: () => {
        slider.reset();

        if (item_actual === items.length - 1) item_actual = -1;

        item_actual++;
        items[item_actual].classList.add('active');
        controls[item_actual].classList.add('active');
    },
    clicked_control: (e) => {
        slider.reset();
        clearInterval(interval_slide);

        const control = e.target;
        const data_index = Number(control.dataset.index);

        control.classList.add('active');

        items.forEach((item, index) => {
            if (index === data_index) {
                item.classList.add('active');
            }
        });

        item_actual = data_index;
        interval_slide = setInterval(slider.next_slide, 10000);
    },
    reset: () => {
        items.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
    },
}

let interval_slide = setInterval(slider.next_slide, 10000);
slider.init();