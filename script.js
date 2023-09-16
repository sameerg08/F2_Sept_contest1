const data = [
    { name: "john", age: 28, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    let ans=data.filter((el)=>{
        return el["profession"]=="developer";
    })
    console.log(ans);
  }  
  // 2. Add Data
  function addData() {
    var pname=prompt("Enter your name:");
    var newData={name:pname}
    newData.age=parseInt(prompt("Enter your age:"));
    newData.profession=prompt("Enter your profession:")
    data.push(newData);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let ans=data.filter((el)=>{
        return el["profession"]!=="admin";
    })
      console.log(ans);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    var newData={name:"Sameer"};
    newData.age=22;
    newData.profession="Engineer"
    data.push(newData);
    console.log(newData);
    console.log(data);
  }

  // 5. Average Age
  function averageAge() {
    let sum=0,c=0,avg=0;
    data.forEach((el)=>{
            sum+=el.age;
            c++;
        })
        avg=sum/c;
        console.log(avg);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    ans=data.filter((el)=>{
        return el.age>25;
    })
    if(Object.keys(ans).length>=1)
     console.log(true);
     else
     console.log(false);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const propertyValues =
      data.map(obj => obj['profession']);
    const uniqueValuesSet =
      new Set(propertyValues);
    const distinctValues =
       Array.from(uniqueValuesSet);
    console.log(distinctValues);
    
  }

  // 8. Sort by Age
  function sortByAge() {
    data.sort(
        function(a, b) {
           return a.age - b.age
        }
    );
    console.log(data)
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((el)=>{
        if(el.name==="john")
        el.profession="manager"
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const categories = data.reduce((acc, cur) => {
        acc[cur.profession] = (acc[cur.profession] || 0) + 1
        return acc;
     }, {})
     console.log(categories);
  }