class uber
{
    constructor(km,cpk)
    {
        this.km=km;
        this.cpk=cpk;
    }
    totalcost()
    {
      var c;
      c= this.km * this.cpk;
      return c;
        
    }
}

var a1=new uber(21,8);
console.log(a1.totalcost());