function password_checker()
{
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;

    if(p1.length < 8)
    {
        alert("The password must me more than 8 characters, try again!")
    }else if(p2.length < 8 )
    {
        alert("Password 2 must be more than 8 characters, try again!")
    }else if (p1 != p2)
    {
        alert("Passwords do not match, try again!")
    }else
    {
        alert("Password Matched!")
    }

    
}

function bbchanger() 
    {
        
        var border_red = document.getElementById("border_red").value;
        var border_green = document.getElementById("border_green").value;
        var border_blue = document.getElementById("border_blue").value;
        var background_red = document.getElementById("background_red").value;
        var background_green = document.getElementById("background_green").value;
        var background_blue = document.getElementById("background_blue").value
        var border_width = document.getElementById("border_width").value;
        
        var tag = document.getElementById("text");
        
        tag.style.borderColor = `rgb(${border_red},${border_green},${border_blue})`;
        
        tag.style.borderWidth = border_width
        
        tag.style.backgroundColor = `rgb(${background_red},${background_green},${background_blue})`;
    }