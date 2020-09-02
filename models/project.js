module.exports = function (sequelize, DataTypes) {
    const Project = sequelize.define("Project", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        init_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        tech_used: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        repo_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        live_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc_short: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc_long: {
            type: DataTypes.STRING,
            allowNull: true
        },
        picture_URL:{
            type: DataTypes.STRING,
            allowNull: true
        },        
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
    })
    Project.associate = function (models) {
        Project.hasMany(models.Comment, {
            onDelete: "cascade"
        });    
    }


    return Project;

}