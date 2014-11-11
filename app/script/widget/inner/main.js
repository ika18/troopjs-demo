define(['troopjs-browser/component/widget',
    'when',
    'template!./main.html'], function (Widget, when, template) {
    'use strict';

    return Widget.extend({
        'sig/initialize': function () {
            console.log('inner initialize');
            return this.signal('render');
        },
        'sig/render': function () {
            console.log('inner render');
        },
        'sig/start': function () {
            var me = this;
            var defer = when();

            defer.done(function () {
                console.log('inner template render');
            });

            me.publish('ajax', {
                url: 'mock/city.json'
            }).done(function (res) {
                var data = res[0];
                me.html(template, data, defer)
            });
            
            console.log('inner start');

            return defer;
        }
    })
});