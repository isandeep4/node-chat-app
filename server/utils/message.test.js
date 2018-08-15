var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage' , () => {
  it('should generate message object', () => {
    var from = 'Sandy';
    var text = 'it is a message';
    var message = generateMessage(from,text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});
  })
})
