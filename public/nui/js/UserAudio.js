var AudioInput = document.querySelector(".input-select");
var AudioOutput = document.querySelector('.output-select');



if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
} else {
    // List cameras and microphones.
    navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
            devices.forEach(function (device) {
                var AudioInputText = document.createElement("option");
                var AudioOutputText = document.createElement("option");
                if(device.kind == 'audioinput') //mic
                {
                    AudioInputText.text = device.label;
                    AudioInput.add(AudioInputText);
                }
                if(device.kind == "videoinput") //camera 
                {
                    AudioOutputText.text = device.label;
                      AudioOutput.add(AudioOutputText);
                }
                if(device.kind == "audiooutput")
                {
                                
                }
            });
        })
        .catch(function (err) {
            console.log(`${err.name}: ${err.message}`);
        });
}
