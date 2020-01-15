var codes1 = [1,2,3,4]

function appendCodes1(users)
{
    codes1 = users.map(function(user){
        return user.code
    })
}

appendCodes1([
    {
        code: 10
    }
])

codes1

const codes2 = [1,2,3,4]

function appendCodes2(users)
{
    users.forEach(function(user){
        return codes2.push(user.code)
    })
}

appendCodes2([
    {
        code: 10
    }
])

codes2