import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    username: DS.attr(),
    useragent: DS.attr(),
    pic: DS.attr(),
    date: DS.attr('date', { defaultValue() { return new Date(); } }),
    message: DS.attr(),

    msgDate: computed('date', () => {
        return `new Date(${this.date})`;
    })
});
