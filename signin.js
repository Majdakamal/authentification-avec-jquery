 //signin
 String.prototype.hashCode = function() 
 {
    var hash = 0;
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
         hash = ((hash<<5)-hash)+char;
        hash = hash & hash; 
    }
     return hash;
 }

  $("#login_cmpt").click(function()
   {
       var username=$('#user').val();
        var pass=$('#pass').val();

    var code=pass.hashCode();
    var user=JSON.parse(localStorage.getItem("formData"));
    var test=false;
               
                if ( (username=="") || (code==""))
                {
                    alert("Veuilez saisir des données!");
                }

                else 
    {
                for (var i=0; i<user.length; i++)
                 {      
                    if ( (username==user[i].user) && (code==user[i].password))
                    {
                      test=true;
                    }
                }
           if(test)
           { 
               
              

               alert("login succefully "+username);
           }
           else 
           {
               alert("nom d'utilisateur ou mot de passe incorrect");
           }

    }  
    $('#user').val("");
           $('#pass').val("");
            
                   
})
