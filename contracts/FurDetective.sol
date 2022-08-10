// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4.0;


contract FurDetective{
    address owner;

    struct OwnerInfo{
        string fullName;
        string cellPhone;
        string location;
        string email;
        uint timeStamp;
    }

    struct RegisterPet{
        string name;
        uint chipId;
        string appleTag;
        string qrCode;
        string animalType;
        string gender;    
        string breed;
        string description;
        uint timeStamp;
        address sender;
        // mapping(address => chipId) petOwner;

    }
    struct RegisteredPets{
        uint[] chipId;
        address petOwner;
        // mapping(address => chipId) petOwner;

    }
    // OwnerInfo ownerinfo;
    // uint[] public myPets;
    mapping(address => RegisteredPets) public myRegisteredPets;
    
    mapping(address => uint256[]) public stakedByAdddress;

    // mapping(address => Balance) public balanceReceived;
    mapping(address => OwnerInfo) private ownerInfoMapping;

    // Track pets with owner address
    mapping(address => RegisterPet) public registeredPetsMapping;

    // Track pets with Chip Id
    mapping(uint => RegisterPet) public searchPetByChipId;

    // Track pets with Apple Tag
    mapping(string => RegisterPet) public searchPetByAppleTag;

    // Track pets with QR Code
    mapping(string => RegisterPet) public searchPetByQrCode;

   

    // Emit events 
    event OwnerInfoEvent(string fullName, string cellPhone, string Location, string email, uint timeStamp);
    event RegisterPetEvent(string name, string chipId, string appleTag, string qrCode, string animalType,
        string gender, string breed, string description, uint timeStamp, address sender);

    
    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner (){
        require(msg.sender == owner, "Only owner can perfom this openration");
        _;
    }
    function registerPetOwner(string memory _fullName, string memory _cellPhone, string memory _location, string memory _email) public onlyOwner {
        OwnerInfo memory _ownerInfo = OwnerInfo({fullName: _fullName, cellPhone: _cellPhone, location: _location, email: _email,
            timeStamp: block.timestamp
            });
        ownerInfoMapping[msg.sender] = _ownerInfo;
        emit OwnerInfoEvent(_fullName, _cellPhone, _location, _email, block.timestamp);
    }

    function registerPets(string memory _name, uint _chipId, string memory _appleTag, string memory _qrCode,
                        string memory _animalType, string memory _gender, string memory _breed, string memory _description, uint256[] memory tokenIds) public onlyOwner{
        RegisterPet memory _registerPet = RegisterPet({
            name: _name, chipId: _chipId, appleTag: _appleTag, qrCode: _qrCode, animalType: _animalType, gender: _gender, 
            breed: _breed, description: _description, timeStamp: block.timestamp, sender: msg.sender 
            });
        registeredPetsMapping[msg.sender] = _registerPet;
        searchPetByChipId[_chipId] = _registerPet;
        searchPetByAppleTag[_appleTag] = _registerPet;
        searchPetByQrCode[_qrCode] = _registerPet;
        stakedByAdddress[msg.sender].push(tokenIds[_chipId]);
        // myPets[msg.sender].push(_chipId);

    }

}

