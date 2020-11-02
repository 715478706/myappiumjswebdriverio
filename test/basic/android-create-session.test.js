const webdriverio = require('webdriverio');
const androidOptions = require('../../helpers/caps').androidOptions;
const app = require('../../helpers/apps').androidApiDemos;
const assert = require('chai').assert;

androidOptions.capabilities.app = app;

describe('Create Android session', function () {
  let client;

  before(async function () {
    client = await webdriverio.remote(androidOptions);
  });

  it('should create and destroy a session', async function () {
    const res = await client.status();
    assert.isObject(res.build);

    const current_package = await client.getCurrentPackage();
    assert.equal(current_package, 'io.appium.android.apis');

    const delete_session = await client.deleteSession();
    assert.isNull(delete_session);
  });
    it('测试应该5000毫秒后结束', function(done) {
        var x = true;
        var f = function() {
            x = false;
            assert.equal(x,false,'我是message');
            done(); // 通知Mocha测试结束
        };
        setTimeout(f, 4000);
    });
});
