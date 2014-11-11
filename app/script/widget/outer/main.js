define(['troopjs-browser/component/widget',
    'when',
    'template!./main.html'], function (Widget, when, template) {
    'use strict';

    // debugger;

    return Widget.extend({
        'name': 'outer',
        'sig/initialize': function () {
            var me = this;
            var defer = when();

            console.log('outer initialize');

            defer.done(function () {
                console.log('outer template render');
                me.signal('render');
            });

            return me.html(template, defer);
        },
        'sig/render': function () {
            console.log('outer render');
        },
        'sig/start': function () {
            var me = this;
            
            
            console.log('outer start');
        }
    })
});