$(document).ready(function () {
    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/api/music",
        dataType: "json",
        type: 'get',
        success: function (data, testStatus, jQxhr) {
            let table = document.getElementById("table");
            let headers = ["Artist", "Album", "Title", "Genre", "Release Date"];
            let columnCount = headers.length;
            let row = table.insertRow(-1);

            for (let i = 0; i < columnCount; i++) {
                let headerCell = document.createElement("th");
                headerCell.innerHTML = headers[i];
                row.appendChild(headerCell);
            }
            $("th:nth-child(1)").addClass("artist");
            $("th:nth-child(2)").addClass("album");
            $("th:nth-child(3)").addClass("title");
            $("th:nth-child(4)").addClass("genre");
            $("th:nth-child(5)").addClass("releaseDate");

            for (let i = 0; i < data.length; i++) {

                row = table.insertRow(i + 1);
                artist = row.insertCell(0);
                album = row.insertCell(1);
                title = row.insertCell(2);
                genre = row.insertCell(3);
                releaseDate = row.insertCell(4);

                artist.innerHTML = data[i]["artist"];
                album.innerHTML = data[i]["album"];
                title.innerHTML = data[i]["title"];
                genre.innerHTML = data[i]["genre"];
                releaseDate.innerHTML = data[i]["releaseDate"];


            }
            $("tr:nth-child(2n)").addClass("shading");
            $("td:nth-child(1)").addClass("artist");
            $("td:nth-child(2)").addClass("album");
            $("td:nth-child(3)").addClass("title");
            $("td:nth-child(4)").addClass("genre");
            $("td:nth-child(5)").addClass("releaseDate");
        },
        error: function (jQxhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })

})

function filterData() {
    event.preventDefault();
    let userSelection = document.getElementById("filterSelection");
    let strUser = userSelection.options[userSelection.selectedIndex].value;
    console.log(strUser);
    let selectionDetail = document.getElementById("detailChoice");
    let userDetailSelecttion = selectionDetail.value;
    console.log(userDetailSelecttion);
    var results = strUser && userDetailSelecttion;
    return results;

}