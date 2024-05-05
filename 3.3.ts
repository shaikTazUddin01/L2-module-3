{
    //type guards
    //typeof-->type guard
    type Alphane =string | number
        
  

    const add = (
        param1: Alphane,
        param2: Alphane
    ): Alphane => {
        if (typeof (param1) === 'number' && typeof (param2) === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString()
        }
    }

  const result = add(2,3)

  //in guard
  type NormalUser={
    name:string
  }

  type AdminUser={
    name:string,
    role:"admin"
  }

  const getUser=(user:NormalUser |AdminUser)=>{
    if('role' in user){
        console.log(`my name is ${user.name} and my role is ${user.role}`);
    }else{
        console.log(`my name is ${user.name} .`);

    }
  }

  const normalUser:NormalUser={
    name:"mr normal vai"
  }

  const adminUser:AdminUser={
    name:"mr normal vai",
    role:'admin'
  }

  getUser(adminUser)

}