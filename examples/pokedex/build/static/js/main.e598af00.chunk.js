(this.webpackJsonppokedex = this.webpackJsonppokedex || []).push([
  [0],
  {
    41: function (e, n, t) {
      e.exports = t(52);
    },
    46: function (e, n, t) {},
    50: function (e, n, t) {},
    52: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t(1),
        c = t.n(a),
        r = t(19),
        l = t.n(r),
        m = (t(46), t(9)),
        i = t(10),
        o = t.n(i),
        s = t(16),
        u = t(25),
        p = t(26),
        d = t(14),
        E = t(15),
        f = t(13);
      function k() {
        var e = Object(u.a)([
          '\n        {\n          pokemon(id: "',
          '") {\n            id\n            name\n            image\n            classification\n            types\n            weight {\n              minimum\n              maximum\n            }\n            height {\n              minimum\n              maximum\n            }\n            resistant\n            attacks {\n              fast {\n                name\n                type\n                damage\n              }\n              special {\n                name\n                type\n                damage\n              }\n            }\n            weaknesses\n            fleeRate\n            maxCP\n            maxHP\n            evolutions {\n              id\n              name\n              image\n            }\n            evolutionRequirements {\n              amount\n              name\n            }\n          }\n        }\n      ',
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = Object(u.a)([
          '\n      {\n        pokemons(first: 10000) {\n          id\n          name\n          image\n          classification\n          types\n        }\n      }\n    ',
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      var v = Object(E.b)({ uri: 'https://graphql-pokemon.now.sh/' }),
        g = new d.a({ link: v, cache: new f.a() }),
        b = (function () {
          var e = Object(s.a)(
            o.a.mark(function e() {
              var n;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        g.query({ query: Object(p.a)(h()) })
                      );
                    case 2:
                      return (
                        (n = e.sent),
                        e.abrupt('return', n.data.pokemons)
                      );
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        y = (function () {
          var e = Object(s.a)(
            o.a.mark(function e(n) {
              var t;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        g.query({ query: Object(p.a)(k(), n) })
                      );
                    case 2:
                      return (
                        (t = e.sent),
                        e.abrupt('return', t.data.pokemon)
                      );
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        P = Object(m.a)({
          isModalOpen: !1,
          pokemons: [],
          isPokemonsLoading: !0,
          selectedPokemon: null,
          isSelectedPokemonLoading: !0,
          fetchList: function () {
            return Object(s.a)(
              o.a.mark(function e() {
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (P.isPokemonsLoading = !0),
                          (e.next = 3),
                          b()
                        );
                      case 3:
                        (P.pokemons = e.sent),
                          (P.isPokemonsLoading = !1);
                      case 5:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          fetchPokemon: function (e) {
            return Object(s.a)(
              o.a.mark(function n() {
                return o.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (P.isSelectedPokemonLoading = !0),
                          (n.next = 3),
                          y(e)
                        );
                      case 3:
                        (P.selectedPokemon = n.sent),
                          (P.isSelectedPokemonLoading = !1);
                      case 5:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              }),
            )();
          },
          hideModal: function () {
            P.isModalOpen = !1;
          },
          showModal: function () {
            P.isModalOpen = !0;
          },
        }),
        w = P,
        x = function (e) {
          return c.a.createElement(
            'div',
            { className: 'type type-'.concat(e.type.toLowerCase()) },
            c.a.createElement('p', null, e.type),
          );
        },
        O = Object(m.b)(function (e) {
          var n = e.id,
            t = e.name,
            a = e.image,
            r = e.classification,
            l = e.types,
            m = e.mini;
          return c.a.createElement(
            'div',
            {
              className: 'pokemon-card '.concat(
                m && 'pokemon-card-mini',
              ),
              onClick: function () {
                w.fetchPokemon(n), w.showModal();
              },
            },
            c.a.createElement('img', { src: a }),
            c.a.createElement('h2', null, t),
            !m &&
              c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(
                  'p',
                  { className: 'classification' },
                  r,
                ),
                c.a.createElement(
                  'div',
                  { className: 'type-container' },
                  l.map(function (e) {
                    return c.a.createElement(x, { key: e, type: e });
                  }),
                ),
              ),
          );
        }),
        N = Object(m.b)(function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            w.pokemons.map(function (e) {
              return c.a.createElement(
                O,
                Object.assign({ key: e.id }, e),
              );
            }),
          );
        }),
        j = Object(m.b)(function (e) {
          var n = e.attack,
            t = n.name,
            a = n.damage,
            r = n.type;
          return c.a.createElement(
            'div',
            { className: 'attack' },
            c.a.createElement(
              'div',
              null,
              c.a.createElement('b', null, t),
              c.a.createElement('p', null, 'Damage: ', a),
            ),
            c.a.createElement(x, { type: r }),
          );
        }),
        L = Object(m.b)(function () {
          if (!w.selectedPokemon) return null;
          var e = w.selectedPokemon,
            n = e.image,
            t = e.name,
            a = e.weight,
            r = e.height,
            l = e.types,
            m = e.classification,
            i = e.resistant,
            o = e.weaknesses,
            s = e.maxCP,
            u = e.maxHP,
            p = e.fleeRate,
            d = e.evolutions,
            E = e.evolutionRequirements,
            f = e.attacks;
          return c.a.createElement(
            'div',
            {
              className: 'modal-container',
              onClick: function () {
                return w.hideModal();
              },
            },
            c.a.createElement(
              'div',
              {
                className: 'modal-content',
                onClick: function (e) {
                  return e.stopPropagation();
                },
              },
              w.selectedPokemon &&
                c.a.createElement(
                  c.a.Fragment,
                  null,
                  w.isSelectedPokemonLoading
                    ? c.a.createElement('p', null, 'Loading...')
                    : c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                          'div',
                          { className: 'modal-header' },
                          c.a.createElement('img', { src: n }),
                          c.a.createElement(
                            'div',
                            { className: 'modal-header-content' },
                            c.a.createElement('h2', null, t),
                            c.a.createElement(
                              'p',
                              null,
                              'max. '
                                .concat(s, ' CP | max. ')
                                .concat(u, ' HP'),
                            ),
                            c.a.createElement(
                              'div',
                              { className: 'type-container' },
                              l.map(function (e) {
                                return c.a.createElement(x, {
                                  key: e,
                                  type: e,
                                });
                              }),
                            ),
                          ),
                        ),
                        c.a.createElement(
                          'div',
                          { className: 'modal-table-container' },
                          c.a.createElement(
                            'div',
                            { className: 'modal-table' },
                            c.a.createElement(
                              'h3',
                              null,
                              'Basic properties',
                            ),
                            c.a.createElement(
                              'p',
                              null,
                              c.a.createElement(
                                'b',
                                null,
                                'Classification: ',
                              ),
                              ''.concat(m),
                            ),
                            c.a.createElement(
                              'p',
                              null,
                              c.a.createElement(
                                'b',
                                null,
                                'Weight: ',
                              ),
                              ''
                                .concat(a.minimum, ' - ')
                                .concat(a.maximum),
                            ),
                            c.a.createElement(
                              'p',
                              null,
                              c.a.createElement(
                                'b',
                                null,
                                'Height: ',
                              ),
                              ''
                                .concat(r.minimum, ' - ')
                                .concat(r.maximum),
                            ),
                            c.a.createElement(
                              'p',
                              null,
                              c.a.createElement(
                                'b',
                                null,
                                'Flee rate: ',
                              ),
                              ''.concat(p),
                            ),
                            c.a.createElement(
                              'div',
                              { className: 'modal-type-container' },
                              c.a.createElement(
                                'div',
                                { className: 'type-container' },
                                c.a.createElement(
                                  'b',
                                  null,
                                  'Resistancy: ',
                                ),
                                i.map(function (e) {
                                  return c.a.createElement(x, {
                                    key: e,
                                    type: e,
                                  });
                                }),
                              ),
                            ),
                            c.a.createElement(
                              'div',
                              { className: 'modal-type-container' },
                              c.a.createElement(
                                'div',
                                { className: 'type-container' },
                                c.a.createElement(
                                  'b',
                                  null,
                                  'Weaknesses: ',
                                ),
                                o.map(function (e) {
                                  return c.a.createElement(x, {
                                    key: e,
                                    type: e,
                                  });
                                }),
                              ),
                            ),
                          ),
                          c.a.createElement(
                            'div',
                            { className: 'modal-table' },
                            d &&
                              c.a.createElement(
                                c.a.Fragment,
                                null,
                                c.a.createElement(
                                  'h3',
                                  null,
                                  'Evolution',
                                ),
                                c.a.createElement(
                                  'div',
                                  {
                                    className: 'evolution-container',
                                  },
                                  d.map(function (e) {
                                    return c.a.createElement(
                                      O,
                                      Object.assign(
                                        { key: e.id },
                                        e,
                                        { mini: !0 },
                                      ),
                                    );
                                  }),
                                ),
                              ),
                            E &&
                              c.a.createElement(
                                'p',
                                null,
                                c.a.createElement(
                                  'b',
                                  null,
                                  'Evolution requirements: ',
                                ),
                                E.amount,
                                ' ',
                                E.name,
                              ),
                            c.a.createElement(
                              'h3',
                              null,
                              'Attacks - fast',
                            ),
                            f.fast.map(function (e) {
                              return c.a.createElement(j, {
                                key: e.name,
                                attack: e,
                              });
                            }),
                            c.a.createElement(
                              'h3',
                              null,
                              'Attacks - special',
                            ),
                            f.special.map(function (e) {
                              return c.a.createElement(j, {
                                key: e.name,
                                attack: e,
                              });
                            }),
                          ),
                        ),
                      ),
                ),
            ),
          );
        }),
        C =
          (t(50),
          Object(m.b)(function () {
            return (
              Object(a.useEffect)(function () {
                w.fetchList();
              }, []),
              c.a.createElement(
                'div',
                null,
                c.a.createElement(
                  'div',
                  { className: 'header' },
                  c.a.createElement('img', {
                    src:
                      'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg',
                  }),
                  c.a.createElement(
                    'p',
                    null,
                    'A demo Pok\xe9dex app built with GraphQL and',
                    ' ',
                    c.a.createElement(
                      'a',
                      {
                        href:
                          'https://github.com/risingstack/react-easy-state',
                      },
                      'react-easy-state',
                    ),
                    '.',
                  ),
                ),
                c.a.createElement(
                  'div',
                  { className: 'content-body' },
                  w.isModalOpen && c.a.createElement(L, null),
                  w.isPokemonsLoading
                    ? c.a.createElement('p', null, 'Loading...')
                    : c.a.createElement(N, null),
                ),
              )
            );
          }));
      l.a.render(
        c.a.createElement(C, null),
        document.getElementById('root'),
      );
    },
  },
  [[41, 1, 2]],
]);
//# sourceMappingURL=main.e598af00.chunk.js.map
