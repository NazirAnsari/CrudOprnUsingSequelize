module.exports=(sequelize,DataTypes)=>{
    const Contacts=sequelize.define("Contacts",{
        lastname:{
            type:DataTypes.STRING,
            allowedNull:false
        },
        firstname:{
            type:DataTypes.STRING
        },
        roll_no:{
            type:DataTypes.INTEGER
        },
    },{
        timeStamp:false,
    })
    
    return Contacts
    }