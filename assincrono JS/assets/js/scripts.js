const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const btn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async() => {
    try {
        const data = fetch(BASE_URL);
        const json = await (await data).json();
        console.log(data);
        console.log(json);

        return json.webpurl;
    } 
    catch (e) {
        console.log(e.message);
    }
    
}

const loadImg = async() => {
    catImg.src = await getCats();
}

btn.addEventListener('click', loadImg);

loadImg();
