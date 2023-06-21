const URL = 'https://api.adviceslip.com/advice';

const fetchData = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const generateAdvice = async() => {
    let data = await fetchData();
    id = 'Advice ';
    text = '';
    const adviceId = document.querySelector('#adviceId');
    const adviceTxt = document.querySelector('#adviceTxt');

    id += data.slip.id;
    text = data.slip.advice;

    adviceTxt.innerHTML = text;
    adviceId.innerHTML = id;
}

const dice = document.querySelector('.dice-bg');

dice.addEventListener('click', () => {
    generateAdvice();
});

generateAdvice();
