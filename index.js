const colors = {
    "colors": [
        {
            "color": "Синий",
            "shades": ["Небесный","Голубой","Глубокий","Королевский"]
        }
    ]
};

const addShade = document.getElementById('addColor');

addShade.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('.form__main-block-head ').style.display = "block";
    var rowInfo = document.createElement("div");
    rowInfo.innerHTML ='<div class="form__row"><p class="form__row-color">Синий</p><div class="form__row-color-block"><p class="form__row-checkbox"><input type="checkbox" name="addShade" id="addShade" checked><label for="addShade"></p><p class="form__row-select"><select name="selectShade" id="selectShade">Выберите оттенок<option>Небесный</option><option>Голубой</option><option>Глубокий</option><option>Королевский</option></select></p><p class="form__row-volume"><input type="number" id="volumeShade"> л</p><p class="form__row-pack">банка</p><p class="form__row-delete"><button id="deleteRow">&#10008;</button></p></div></div>'
    document.getElementById("blockRows").appendChild(rowInfo);
    return false;
})


document.getElementById('form-submit').addEventListener('click', function(e){
    e.preventDefault();
    alert('Форма отправлена!');
})