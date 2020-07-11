

$(document).ready(function(){
    $.ajax({
        url:"http://www.devcodecampmusiclibrary.com/api/music",
        dataType:"json",
        type:'get',
        success:function(data,  testStatus,jQxhr){
            console.log(data);
            //visualize data

            // for(let i=0; i < data.length ; i++)
            // {
            //     $("#thing").append(`<div>${data.results[i]["title"]}</div>`);
                
            // }
        },
        error:function(jQxhr,textStatus,errorThrown){
            console.log(errorThrown);
        }
    })
})