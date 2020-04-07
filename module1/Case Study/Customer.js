let Customer = function () {
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.setCMND = function (cmnd) {
        this.cmnd = cmnd;
    };
    this.getCMND = function () {
        return this.cmnd;
    };
    this.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    this.getBirthday = function () {
        return this.birthday;
    };
    this.setEmail = function (email) {
        this.email = email;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.setAddress = function (address) {
        this.address = address;
    };
    this.getaddress = function () {
        return this.address;
    };
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    };
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    };
    this.setDiscount = function (discount) {
        this.discount = discount;
    };
    this.getDiscount = function () {
        return this.discount;
    };
    this.setQuantityIncluded = function (quantityIncluded) {
        this.quantityIncluded = quantityIncluded;
    };
    this.getQuantityIncluded = function () {
        return this.quantityIncluded;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.gettypeRoom = function () {
        return this.typeRoom;
    };
    this.setRentDays = function (rentDays) {
        this.rentDays = rentDays;
    };
    this.getRentDays = function () {
        return this.rentDays;
    };
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    };
    this.gettypeService = function () {
        return this.typeService;
    };
    this.totalPays = function () {
        let money = 200;
        if (this.gettypeService == "Villa") {
            money = 500;
        } else if (this.gettypeService == "House") {
            money = 300;
        } else if (this.gettypeService == "Room") {
            money = 200;
        }
        return this.getRentDays*money*(1-this.getDiscount/100)
    }
};