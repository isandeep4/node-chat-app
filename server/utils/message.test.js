var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage' , () => {
  it('should generate message object', () => {
    var from = 'Sandy';
    var text = 'it is a message';
    var message = generateMessage(from,text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});
  })
});
describe('generateLocationMessage' , () => {
  it('should generate Location Message object', () => {
    var from = 'Raul';
    var longitude = 1 ;
    var latitude = 1;
    var url = 'https://www.google.com/maps?q=1,1';
    var message = generateLocationMessage(from ,latitude ,longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,url});

  })
})
