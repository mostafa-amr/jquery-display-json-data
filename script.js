

$('input').on("click",function(){
    if($('div').children().length===0){
$.ajax({
url: "data.json",
method:"GET",
dataType:"json",
success: function(Response){
    var mytable=$(`
    <table border="2" >
    <tr>
        <th>id</th>
        <th>title</th>
        <th>body</th>
    </tr>
    </table>
    `)
    for (var i=0;i<10;i++){
        var dataRow=$(`
        <tr>
        <td>${Response[i].id}</td>
        <td>${Response[i].title}</td>
        <td>${Response[i].body}</td>
    </tr>`)
    mytable.append(dataRow)
    }
    $('div').append(mytable)
},
error: function(e){
alert('hello dude looks like something went wrong goodluck spending 10 hours trying to solve it')
}


})
}
})

