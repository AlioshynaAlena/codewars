// ❓DESCRIPTION
// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
// The input data has the following structure:
// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

//У вас есть приложение для группового чата, но кто в нем онлайн?

// Вы хотите показать пользователям, кто из их друзей находится в сети и доступен для общения!

// Получив на вход массив объектов, содержащий имена пользователей, статус и время с момента последней активности (в минутах), создайте функцию, которая будет определять, кто находится онлайн, оффлайн и вдали.

// Если кто-то находится в сети, но его последняя активность была совершена более 10 минут назад, он будет считаться отсутствующим.

// Входные данные имеют следующую структуру:

// 🏓 TESTS
// it('Example test one of each', function() {
//     friends = [{
//         username: 'David',
//         status: 'online',
//         lastActivity: 10
//     }, {
//         username: 'Lucy',
//         status: 'offline',
//         lastActivity: 22
//     }, {
//         username: 'Bob',
//         status: 'online',
//         lastActivity: 104
//     }]
//     Test.assertDeepEquals(whosOnline(friends), {
//         online: ['David'],
//         offline: ['Lucy'],
//         away: ['Bob']
//     }, 'Wrong result for example one of each')
// })

// it('Example test no one online', function() {
// friends = [{
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
// }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
// }]

// Test.assertDeepEquals(whosOnline(friends), {
//     offline: ['Lucy'],
//     away: ['Bob']
// }, 'Wrong result for example no one online')
// })
// })

// ✅SOLUTION

const whosOnline = (friends) => {
    const result = {
        online: [],
        offline: [],
        away: [],
    }
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'online') {
            if (friends[i].lastActivity <= 10) {
                result.online.push(friends[i].username)
            } else {
                result.away.push(friends[i].username)
            }
        } else {
            result.offline.push(friends[i].username)
        }
    }
    for (const key in result) {
        if (result[key].length === 0) {
            delete result[key];
        }
    }
    return result
}



console.log(whosOnline([{
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]));
