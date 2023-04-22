var artist;
fetch("../../archiver_dataspace/storage/producerpr.json")
    .then((response) => response.json())
    .then((json) => {
        document.getElementById("discover_artist_count").innerHTML = "现在有 <font color='#6495ed' title='Thanks for Artist in This RCD.'>"+json.artist.length+"</font> 位艺术家加入我们了！";
        for (let i = 0; i < json.artist.length; i++) {
            var prf = json["artist_introductions"][json.artist[i]];

            var prf_othername = "";
            for (let j = 0; j < prf["other_name"].length; j++) {
                prf_othername += prf["other_name"][j] + ", "}
            prf_othername = prf_othername.slice(0, -2);

            var tmp_repworks = "";
            for (let j = 0; j < prf["rep_works"].length; j++) {
                tmp_repworks += prf["rep_works"][j] + ", ";
            }
            tmp_repworks = tmp_repworks.slice(0, -2);

            var tmp_lyr = "";
            for (let j = 0; j < prf["rep_lyr"].length; j++) {
                tmp_lyr += prf["rep_lyr"][j] + ", ";
            }
            tmp_lyr = tmp_lyr.slice(0, -2);

            var tmp_soc = "";
            for (let j = 0; j < prf["social_cmc"].length; j++) {
                tmp_soc += prf["social_cmc"][j] + ", ";
            }
            tmp_soc = tmp_soc.slice(0, -2);

            var tmp_socview = (tmp_soc !== "") ? "| 社交方式："+tmp_soc : "";
            var prf_wroteview = ((tmp_repworks !== "") ? "代表作：<font color='white'>"+tmp_repworks+"</font>" : "") + "<br>" + ((tmp_lyr !== "") ? "代表歌词：<font color='white'>"+tmp_lyr+"</font>" : "");
            var prf_nameview = (prf_othername !== "") ? prf["name"]+" <font color='gray' style='font-size: 15px'>("+prf_othername+")</font>" : prf["name"]

            document.getElementById("ArtistListFor4").innerHTML += "<div id='artist_"+prf["name"]+"'>"+
                "<h2>"+prf_nameview+"</h2>"+
                "<div><img src='"+prf["avatar"]+"' style='padding: 100px, 0px; height: 100px; border-radius: 10px; float: left;' alt='Avatar'/></div>"+
                "<font color='gray' style=''><div>生日：<font color='#fffaf0'>"+prf["birth"]+"</font> "+tmp_socview+"<br>"+prf_wroteview+"<br>自我介绍：<font color='#fffaf0'>"+prf["introduce"]+"</font></div></font>"+
                "<br></div>"
        }
    });
