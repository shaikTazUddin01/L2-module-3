{
    var add = function (param1, param2) {
        if (typeof (param1) === 'number' && typeof (param2) === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    var result = add(2, 3);
    var getUser = function (user) {
        if ('role' in user) {
            console.log("my name is ".concat(user.name, " and my role is ").concat(user.role));
        }
        else {
            console.log("my name is ".concat(user.name, " ."));
        }
    };
    var normalUser = {
        name: "mr normal vai"
    };
    var adminUser = {
        name: "mr normal vai",
        role: 'admin'
    };
    getUser(adminUser);
}
