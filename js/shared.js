function getInput(id){
    const inputvalue = document.getElementById(id).value;
const inputNumber = parseFloat(inputvalue);
    return inputNumber;
};


// tk

function gettext(id){
    const inputvalue = document.getElementById(id).innerText;
const inputNumber = parseFloat(inputvalue);
    return inputNumber;
};


// btn hidden

function showSectionById(id){

    document.getElementById('hide').classList.add('hidden');
    document.getElementById('hide2').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}