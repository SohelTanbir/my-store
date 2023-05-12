const utilities = {
    isValidEmail:(email)=>{
        if(email){
            const regx = email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
              if (!regx) {
                return false;
              }
              return true
        }
        
    }
}


// export 
module.exports =  utilities