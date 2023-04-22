var artist;
fetch("../archiver_dataspace/storage/producerpr.json")
    .then((response) => response.json())
    .then((json) => {
        for (let i = 0; i < json.artist.length; i++) {
            artist += json.artist[i]+", "
        }
        artist = artist.replaceAll("undefined", "")
        document.getElementById("Artist").innerText = artist;
        console.log(artist)
    });

document.getElementById("href_home").href = "http://"+window.location.host+"/express";
document.getElementById("href_arti").href = "http://"+window.location.host+"/express/discover"