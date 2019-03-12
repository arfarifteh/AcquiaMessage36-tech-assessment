import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | messages-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{messages-list}}`);

    assert.equal(this.element.textContent.trim(), 'Messages List');

    // Template block usage:
    await render(hbs`
      {{#messages-list}}
        Messages List
      {{/messages-list}}
    `);

    assert.equal(this.element.textContent.trim(), 'Messages List');
  });
});
