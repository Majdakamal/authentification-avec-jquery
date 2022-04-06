 //signup
 String.prototype.hashCode = function() {
    var hash = 0;
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
         hash = ((hash<<5)-hash)+char;
        hash = hash & hash; 
    }
     return hash;
 }

  $("#creer_cmpt").click(function() {
  


        var username=$('#user1').val();
        var pass=$('#pass1').val();
     

          if ( (username=="") || (pass==""))
                {
                    alert("Veuilez saisir des données!");
                } 

        else
        {

        var code=pass.hashCode();
         var formData=JSON.parse(localStorage.getItem("formData"))||[];
         formData.push({
        
         user:username,
         password:code
        /*user:"majda",
         password:"azedine"*/
        
    });
           localStorage.setItem('formData', JSON.stringify(formData));
           alert("Compte crée avec succes");
           $('#user1').val("");
           $('#pass1').val("");


    }
        
})