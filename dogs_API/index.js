const APILink = "https://dog.ceo/api/breeds/image/random";
let imageLinks = [];
let currentImgNumber = -1;

const fetchURL = async function() {
    const response = await fetch(APILink);

    if (!response.ok) {
        alert('Error :(');
    };

    const responseJSON = await response.json();

    const status = responseJSON.status;

    if (status == 'success'){
        imageLinks.push(responseJSON.message)
        return responseJSON.message;
    };
};

const updateMainDiv = function(htmlCode) {
    $('#main').html(`${htmlCode}`);
};

const manageBackButton = function(OK) {
    if (OK) {
        $('#back').html('<button onclick="showPrevImage()">Назад</button>');
    } else {
        $('#back').html('');
    };
};

const showImage = function(link) {
    updateMainDiv(`
        <div class="text">Випадкове фото собаки</div>
        <div class='ramka-7'>
            <img class='ramka-7' src="${link}" alt="dog" height='500' width='500' style='object-fit: cover;'>
        </div>
    `)
};

const showNextImage = async function() {
    currentImgNumber++;

    if (currentImgNumber == imageLinks.length) {
        link = await fetchURL();
    } else {
        link = imageLinks[currentImgNumber]
    };

    if (link) {
        updateMainDiv('');
        showImage(link)
    };
    
    if (currentImgNumber > 0) {
        manageBackButton(true)
    }
};

const showPrevImage = async function() {
    currentImgNumber--;
    if (currentImgNumber <= 0) {
        manageBackButton(false)
        link = imageLinks[currentImgNumber];
        showImage(link);
        currentImgNumber = 0;
    } else {
        link = imageLinks[currentImgNumber];
        showImage(link);
    };
};

showNextImage();