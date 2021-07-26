console.log('script');
//Accessing key from config.json
var myKey=JSON.parse(myKey);//convert json into js object
console.log(myKey[0].key);
var key = myKey[0].key;

$.ajax({
  url : 'https://api.unsplash.com/photos?page=28&client_id='+key,
  data: 'json',
  success: function(data){
    console.log(data);
    var i;
    for (i=0;i<data.length;i++){
        document.getElementById('objects').innerHTML +=
        '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
          '<div class="card mt-3 ml-5" style="width: 18rem;">' +
            '<div class="card-body" style="background:#530c45" >'+
              '<h5 class="card-title">' +'</h5>'+
              '<img style="width:250px" src =' + data[i].urls.small + '>'+

              '<p class="card-text" style="color:#d4bdd0">'+
               'Height: '+ data[i].height + '<br>'+
               'Width: '+ data[i].width + '<br>'+
               'User: '+ data[i].user.bio + '<br>'+
               'Likes: ' + data[i].likes+'</p>'+

            '</div>'+
          '</div>'+
        '</div>';
    }
    // for loop
  },
  error : function(){
    console.log('error');
  }
});
