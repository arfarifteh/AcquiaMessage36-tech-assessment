import Route from '@ember/routing/route';

// let messageList = {
//     "included": [],
//     "data": [
//         {
//             "attributes": {
//                 "date": "2015-10-11T08:40:51.620Z",
//                 "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
//                 "message": "hi!",
//                 "username": "bob.jones",
//                 "pic": "http://semantic-ui.com/images/avatar/small/elliot.jpg"
//             },
//             "type": "messages",
//             "id": "1"
//         },
//         {
//             "attributes": {
//                 "date": "2015-10-16T09:40:51.620Z",
//                 "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
//                 "message": "hey!",
//                 "username": "grace.kelly",
//                 "pic": "http://semantic-ui.com/images/avatar/small/helen.jpg"
//             },
//             "type": "messages",
//             "id": "2"
//         },
//         {
//             "attributes": {
//                 "date": "2015-10-22T10:40:51.620Z",
//                 "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
//                 "message": "sup!",
//                 "username": "jenny.huffman",
//                 "pic": "http://semantic-ui.com/images/avatar/small/jenny.jpg"
//             },
//             "type": "messages",
//             "id": "3"
//         },
//         {
//             "attributes": {
//                 "date": "2015-11-01T11:40:51.620Z",
//                 "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
//                 "message": "yo!",
//                 "username": "alex.johnson3",
//                 "pic": "http://semantic-ui.com/images/avatar/small/joe.jpg"
//             },
//             "type": "messages",
//             "id": "4"
//         }
//     ],
//     "links": {}
// };
export default Route.extend({
    model() {
        return this.store.findAll('message').then(function (messages) {

            return (messages.content);
        });
    }
});
