let user = {
    name: "Іван",
    years: 30
  };
  
  let { name, years: age, isAdmin = false } = user;
  
  alert(name);     
  alert(age);      
  alert(isAdmin);  
