/* jshint ignore:start */
define(['jquery', 'core/log'], function($, log) {

    "use strict"; // jshint ;_;

    // http://ajax911.com/jquery-object-oriented-plugins/.

    log.debug('Essential Colour Switcher AMD');

    !(function($) {

        var ColoursSwitcher = function (element) {
            this.$element = $(element);
            this.SCHEMES = ['default', 'alternative1', 'alternative2', 'alternative3', 'alternative4'];
            this.scheme = 'default';
        }

        ColoursSwitcher.prototype = {

            constructor: ColoursSwitcher,
            init: function(data) {
            var i, s;
                /* Attach events to the links to change colours scheme so we can do it with
                   JavaScript without refreshing the page. */
                log.debug('Colour switcher on: ' + data.div);
                var body = $('body');
                for (i in this.SCHEMES) {
                    s = this.SCHEMES[i];
                    // Check if this is the current colour.
                    if (body.hasClass('essential-colours-' + s)) {
                        this.scheme = s;
                        log.debug('Colour switcher current scheme: ' + s);
                    } /*
                    Y.all(config.div + ' .colours-' + s).each(function (node) {
                        node.ancestor().on('click', this.setScheme, this, s);
                    }, this); */
                }
            },
            blip: function(thing) {
                log.debug('Thing: ' + thing);
                log.debug('Element: ' + this.$element.attr('class'));
                log.debug('Scheme: ' + this.scheme);
            }
        };

        var old = $.fn.ColoursSwitcher

        $.fn.ColoursSwitcher = function(data) {
            this.colourswitcher = new ColoursSwitcher(this);
            this.colourswitcher.init(data);

            return this;
        };

        $.fn.ColoursSwitcher.noConflict = function () {
            $.fn.ColoursSwitcher = old
            return this
        }
    })($);

    return {
        init: function(data) {
            $(document).ready(function($) {
                var cs = $(document.body).ColoursSwitcher(data);
                cs.colourswitcher.blip('Hullo!');
                return cs;
            });
            log.debug('Essential Colour Switcher AMD init');
        }
    }
});
/* jshint ignore:end */

/*
YUI.add('moodle-theme_essential-coloursswitcher', function (Y) {

// Available color schemes.
    var SCHEMES = ['default', 'alternative1', 'alternative2', 'alternative3', 'alternative4'];

    /**
     * Essential theme colours switcher class.
     * Initialise this class by calling M.theme_essential.init
     */ /*
    var ColoursSwitcher = function () {
        ColoursSwitcher.superclass.constructor.apply(this, arguments);
    };
    ColoursSwitcher.prototype = {
        /**
         * Constructor for this class
         * @param {object} config
         */ /*
        initializer: function (config) {
            var i, s;
            /* Attach events to the links to change colours scheme so we can do it with
               JavaScript without refreshing the page. */ /*
            Y.log('Colour switcher on: ' + config.div);
            for (i in SCHEMES) {
                s = SCHEMES[i];
                // Check if this is the current colour.
                if (Y.one(document.body).hasClass('essential-colours-' + s)) {
                    this.set('scheme', s);
                }
                Y.all(config.div + ' .colours-' + s).each(function (node) {
                    node.ancestor().on('click', this.setScheme, this, s);
                }, this);
            }
        },
        /**
         * Sets the colour being used for the essential theme
         * @param {Y.Event} e The event that fired
         * @param {string} colours The new colours scheme
         */ /*
        setScheme: function (e, scheme) {
            // Prevent the event from refreshing the page.
            e.preventDefault();
            // Switch over the CSS classes on the body.
            var prefix = 'essential-colours-';
            Y.one(document.body).replaceClass(prefix + this.get('scheme'), prefix + scheme);
            // Update the current colour.
            this.set('scheme', scheme);
            // Store the users selection (Uses AJAX to save to the database).
            M.util.set_user_preference('theme_essential_colours', scheme);
        }
    };
// Make the colours switcher a fully fledged YUI module.
    Y.extend(ColoursSwitcher, Y.Base, ColoursSwitcher.prototype, {
        NAME: 'Essential theme colours scheme switcher',
        ATTRS: {
            scheme: {
                value: 'default'
            }
        }
    });
// Our Essential theme namespace
    M.theme_essential = M.theme_essential || {};
// Initialisation function for the colours scheme switcher
    M.theme_essential.initColoursSwitcher = function (cfg) {
        return new ColoursSwitcher(cfg);
    }

}, '@VERSION@', {requires: ['base', 'node']});
*/