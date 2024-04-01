const lottoNumber = document.querySelector('#lotto');
const bunusNumber = document.querySelector('#bonus');
const lottoButton = document.querySelector('#lotto-button');
const timeout = document.querySelector('#timeout');
const lotto = () => {
    const start = window.performance.now();
    const lottoNumberArray = [];
    let bunusNumber = 0;

    for (let i = 0; i < 6; i++) {
        const pickedNumber = Math.floor(Math.random() * 45) + 1;

        if (lottoNumberArray.includes(pickedNumber)) {
            i--;
            continue;
        }
        lottoNumberArray.push(pickedNumber);
    }

    while (true) {
        bunusNumber = Math.floor(Math.random() * 45) + 1;

        if (!lottoNumberArray.includes(bunusNumber)) {
            break;
        }
    }
    const end = window.performance.now();
    const time = start - end;
    return { lottoNumbers: lottoNumberArray, bonus: bunusNumber, time: time };
}

lottoButton.addEventListener('click', () => {
    const { lottoNumbers, bonus, time } = lotto();

    lottoNumber.innerHTML = lottoNumbers.join(', ');
    bunusNumber.innerHTML = bonus;
    timeout.innerHTML = time;
});