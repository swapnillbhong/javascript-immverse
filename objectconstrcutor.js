function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
e=new emp(101,'swapnil bhong',20000);

console.log(e.id+" "+e.name+" "+e.salary);