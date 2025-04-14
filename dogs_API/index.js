const APILink = "https://dog.ceo/api/breeds/image/random";
let URLList = [];
let currentImgNumber = 0;

const fetchURL = async function() {
    const response = await fetch(APILink);

    if (!response.ok) {
        alert('Error :(');
    };

    const responseJSON = await response.json();

    const status = responseJSON.status;

    if (status == 'success'){
        URLList.push(responseJSON.message);
        return responseJSON.message;
    };
};

const showNextImg = async function() {
    const link = await fetchURL();

    if (link) {
        $('#main').append(`
            <div class="text">Випадкове фото собаки</div>
            <div class='ramka-7'><img class='ramka-7' src="${link}" alt="dog" height='500' wight='500' style='object-fit: cover;'></div>
        `)
    };

    currentImgNumber++;
};

showNextImg();

const changeIMG = async function() {
    $('#main').html('');

    await showNextImg();
};