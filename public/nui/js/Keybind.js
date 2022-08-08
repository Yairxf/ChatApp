
const record_btn = document.querySelector('.record-btn').addEventListener('click', KeyBindSetValue);
const stop_btn = document.querySelector('.record-btn').addEventListener('click', StopRecording);
const keybind_input = document.querySelector('.key-name');
const Add_btn_keybind = document.getElementById('add-btn').addEventListener('click', AddKeyBind);
const Keybind_Container = document.querySelector('.option-secetion');
const keybind_li_element = document.getElementById('keybind-li-element');

const Keybind = []

function KeyBindSetValue(e) {

    console.log("record btn has been pressed");
    const record_btn = document.querySelector('.record-btn').innerHTML = "Recording..."
    if (keybind_input.value == '') {
        const box = document.querySelector(".chose-option-keybind");
        document.querySelector('.key-name').classList.add('active-record')
        document.addEventListener("keydown", e => {
            let keyName = e.keyCode === 32 ? "Space" : e.key;
            box.querySelector(".key-name").value = keyName.toUpperCase();
        });
    }
    if (keybind_input.value != '') {
        return
    }
}

function StopRecording() {
    if (keybind_input.value != '') {
        console.log("Stop Recordoing")
        const record_btn = document.querySelector('.record-btn').innerHTML = "No Keybind Set";
        document.querySelector('.key-name').classList.remove('active-record');

    }
    return
}

function AddKeyBind() {
    Keybind.push("New Keybind");
    console.log(Keybind)
    console.log(Keybind.length)
    if (Keybind.length < 4) {
        let li = document.createElement('li');
        li.innerHTML += `      
        <div class="d-flex col option-keybind-container">
        <div class="action-option-div" id="flex-column">
            <label for="keybinds-option-title" id="title-action">ACTION</label>
            <select name="keybinds-option" id="keybinds-option">
                <option value="volvo">Toggle Deafen</option>
                <option value="saab">Toggle Mute</option>
                <option value="mercedes">Push To Tallk</option>
                <option value="audi">Toggle Screen Share</option>
            </select>
        </div>
        <div class="chose-option-keybind" id="flex-column">
            <label for="keybinds-option" id="title-action">KEYBIND</label>
            <div class="record-container">
                <input class="key-name" placeholder="No Keybind Set" disabled><button
                    class="record-btn">Record</button></input>  
            </div>
        </div>
        <button type="button" class="btn-close btn-close-white"
            aria-label="Close" id="close-btn-keybind"></button>
    </div>
    `
        Keybind_Container.appendChild(li)
    }
    else {
        document.getElementById('waring-msg').innerHTML = 'You Cant Add More Then 5 Keybinds'

    }
}