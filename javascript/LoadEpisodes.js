$.getJSON('https://dcnapp.github.io/Config/EpisodesData.json', data => {
    var count = data.length;
    var container = document.getElementById("dropdown-list");
    var EpisodeElement;

    for (var i = 0; i < count; i++) {
        var item = data[i];
        if (item.isfiller === true) {
            EpisodeElement = `<div class="dropdown-list_item"><button class="ep" onclick="LoadEpisodes(\'${item.url}\', \'${item.title}\')">${item.title}<span class="filler">فلر</span></button></div>`
        } else {
            EpisodeElement = `<div class="dropdown-list_item"><button class="ep" onclick="LoadEpisodes(\'${item.url}\', \'${item.title}\')">${item.title}</button></div>`
        }
        container.innerHTML += EpisodeElement;
    }
});



function LoadEpisodes(url, title) {
    CheckForUpdates()
    UpdateTitle(title)
    document.querySelector('#frame').src = url
}

const UpdateTitle = title => document.getElementById("ep-title").innerHTML = title
const CheckForUpdates = () => {
    $.getJSON('https://dcnapp.github.io/Config/version.json', data => {

        if (version == data['latest-version']) { }
        else {
            alert('يوجد تحديث جديد لتحميل التحديث قم بتشغيل \nupdater.exe')
        }
    });
}
