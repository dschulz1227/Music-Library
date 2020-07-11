$(document).ready(function () {
    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/api/music",
        dataType: "json",
        type: 'get',
        success: function (data, testStatus, jQxhr) {
            console.log(data);
            //visualize data

            for (let i = 0; i < data.length; i++) {
                let table = document.getElementById("table");
                let row = table.insertRow(i);
                let artist = row.insertCell(0);
                let album = row.insertCell(1);
                let title = row.insertCell(2);
                let genre = row.insertCell(3);
                let releaseDate = row.insertCell(4);
                
                artist.innerHTML = data[i]["artist"];
                album.innerHTML = data[i]["album"];
                title.innerHTML = data[i]["title"];
                genre.innerHTML = data[i]["genre"];
                releaseDate.innerHTML = data[i]["releaseDate"];

                jQuery("tr:nth-child(3n)").addClass("classC");


                // $("#title").append(`<div>${data[i]["title"]}</div>`);
                // $("#genre").append(`<div>${data[i]["genre"]}</div>`);
                // $("#album").append(`<div>${data[i]["album"]}</div>`);
                // $("#releaseDate").append(`<div>${data[i]["releaseDate"]}</div>`);
                // $("#artist").append(`<div>${data[i]["artist"]}</div>`);
            }
        },
        error: function (jQxhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
})