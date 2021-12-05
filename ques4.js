class PersonDetails{
	constructor(name,dateofbirth,phone,degree,languages,city,nationality,age){
    	this.name=name;
        this.dateofbirth=dateofbirth;
        this.phone=phone;
        this.degree=degree;
        this.languages=languages;
        this.city=city;
        this.nationality;
      	this.age=age;
    }
  	displayInfo(){
       return this.name+ 
         this.dateofbirth+
         this.phone+ 
         this.degree+ 
         this.languages+ 
         this.city+ 
         this.nationality+ 
      	 this.age;
    }
}

let persondetails = new PersonDetails('vigneshraaj','19/01/1997','8248218821','MCA','english,tamil','chennai',
 'indian','23');
console.log(persondetails.displayInfo()); 
