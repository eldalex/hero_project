let test = [
    {
        "id": 1,
        "name": "Первый герой",
        "description": "Первый герой в рейтинге!",
        "element": "fire"
    },
    {
        "id": 2,
        "name": "Неизвестный герой",
        "description": "Скрывающийся в тени",
        "element": "wind"
    },
    {
        "id": 3,
        "name": "Морской герой",
        "description": "Как аквамен, но не из DC",
        "element": "water"
    }
]

a= [...test.splice(0,test.findIndex((item) => item.id === 2)),
    ...test.splice(test.findIndex((item) => item.id === 2)+1)]
console.log(a)
console.log(test)
// console.log(test.find(item=>{
//     item.id=2
// }))