let users=[
    {
        id:"48f370a772c7496f6c9d2e6d92e920c87dd00a5c",
        name:"Jaida Haas",
        birth:"1980-12-25"
    },
    {
        id:"e003c89cdf35cdf46d8239b4692436364b7259f9",
        name:"Steven Thompson",
        birth:"1992-07-05"
    },
    {
        id:"38d96106bc8ef3d8bd369b99bb6972702c9826d5",
        name:"Mathias Benitez",
        birth:"1990-01-15"
    }
];

let entries=[
    {
        title:"Primera entrada",
        body:"Esta es mi primera entrada",
        date:"2021-11-15",
        userId:"e003c89cdf35cdf46d8239b4692436364b7259f9"
    },
    {
        title:"Segunda entrada",
        body:"Esta es mi segunda entrada",
        date:"2021-11-16",
        userId:"e003c89cdf35cdf46d8239b4692436364b7259f9"
    },
    {
        title:"Grammys Latinos 2021",
        body:"La celebración de los Premios Grammy Latinos comienza este miércoles con diferentes eventos, entre los que se destaca la Gala Persona del Año",
        date:"2021-11-16",
        userId:"38d96106bc8ef3d8bd369b99bb6972702c9826d5"
    }
];

let groups=[
    {
        id:"14fa461bf4b98155e82adc86532938553b4d33a9",
        name:"Programadores Full Stack",
        limit: 5,
        users:["e003c89cdf35cdf46d8239b4692436364b7259f9","48f370a772c7496f6c9d2e6d92e920c87dd00a5c"]
    }
];

module.exports = {users, entries, groups};