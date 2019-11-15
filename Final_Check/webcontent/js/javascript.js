function validateMenuItemForm()
{
  var title=document.forms["editMenuForm"]["itemName"].value;
  var boxOffice=document.forms["editMenuForm"]["price"].value;
  var dateOfLaunch=document.forms["editMenuForm"]["date"].value;
  var genre=document.forms["editMenuForm"]["itemType"].value;
  if(title=="")
  {
    alert("Title is required");
    return false;
  }
  else if(title.length<2||title.length>100)
  {
    alert("Title should have 2 to 100 characters");
    return false;  
  }
  if(boxOffice=="")
  {
    alert("Box Office is required");
    return false;
  }
  else if(isNaN(boxOffice))
  {
    alert("Box Office has to be a number");
    return false;
  }
  if(dateOfLaunch=="")
  {
    alert("Date of Launch is required");
    return false;
  }
  if(genre=="")
  {
    alert("Select one genre");
    return false;
  }
  }