function registrationNumbersFactory(regNumbers) {
    var listRegi = [] || regNumbers;

    //logic/ function that will allow me to specify format of my registration by using regex/ regular expression

    function regi(plate) {
        var plateNumber = plate.trim().toUpperCase()
        var regex = /^((CJ|CW|CY)\s([0-9]){5})$/
        var regex2 = /^((CJ|CW|CY)\s([0-9]){6})$/
        var regex3 = /^((CJ|CW|CY)\s([0-9]){7})$/



        var isValid = regex.test(plateNumber);
        var isValid2 = regex2.test(plateNumber);
        var isValid3 = regex3.test(plateNumber);

        if (isValid || isValid2 || isValid3) {
            if (!listRegi.includes(plateNumber)) {
                listRegi.push(plateNumber)
                console.log(listRegi);
                return plateNumber;
            }
            else if (listRegi.includes(plateNumber)) {
                return "registration number already exist";
            }

        }
        else {
            return "Invalid registration number"
        }
    }
    //create a logic that will push the registration into listRegi array.

    function getRegi() {
        return listRegi;
    }

    function setRegNum(regNumbers) {
        listRegi = regNumbers
        return listRegi
    }

    function filterReg(town) {
        var filtered = []
        for (var i = 0; i < listRegi.length; i++) {
            if (listRegi[i].startsWith(town)) {
                filtered.push(listRegi[i])
            }
        }
        console.log(filtered)
        return filtered
    }


    // return your functions here
    return {
        regi,
        getRegi,
        filterReg,
        setRegNum,
    }

}