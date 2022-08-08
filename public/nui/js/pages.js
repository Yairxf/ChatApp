//btns
const app_friend_reqeust_btn = document.getElementById('fr-btn').addEventListener('click', ChangeToFriendSettings);
const app_appearacne_btn = document.getElementById('appearance-btn').addEventListener('click', ChangeToAppearanceSettings);
const user_settings_btn = document.getElementById('my-acc-btn').addEventListener('click', ChangeToUserSettings);
const Keybind_settings_btn = document.getElementById('keybind_btn').addEventListener('click', ChangeToKeybind)
const Voice_Video_btn = document.getElementById('voice_And_Video-btn').addEventListener('click', ChangeTOVoiceVideo)


const user_settings = document.getElementById('su');
const friend_settings = document.getElementById('fr');
const appearnace_settings = document.getElementById('as');
const keybind_settings = document.getElementById('kb');
const voiceVideo = document.getElementById('vv');


function ChangeToFriendSettings() {
    user_settings.style.display = 'none';
    appearnace_settings.style.display = 'none';
    friend_settings.style.display = 'block';
    keybind_settings.style.display = 'none';
    voiceVideo.style.display = 'none';
}
function ChangeToUserSettings() {
    user_settings.style.display = 'block';
    appearnace_settings.style.display = 'none';
    friend_settings.style.display = 'none';
    keybind_settings.style.display = 'none';
    voiceVideo.style.display = 'none';
}
function ChangeToAppearanceSettings() {
    user_settings.style.display = 'none';
    appearnace_settings.style.display = 'block';
    friend_settings.style.display = 'none';
    keybind_settings.style.display = 'none';
    voiceVideo.style.display = 'none';

}
function ChangeToKeybind() {
    user_settings.style.display = 'none';
    appearnace_settings.style.display = 'none';
    friend_settings.style.display = 'none';
    keybind_settings.style.display = 'block';
    voiceVideo.style.display = 'none';
}
function ChangeTOVoiceVideo() {
    user_settings.style.display = 'none';
    appearnace_settings.style.display = 'none';
    friend_settings.style.display = 'none';
    keybind_settings.style.display = 'none';
    voiceVideo.style.display = 'block';
}