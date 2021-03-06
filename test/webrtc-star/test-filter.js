/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const multiaddr = require('multiaddr')

const WebRTCStar = require('../../src/webrtc-star')

describe('filter', () => {
  it('filters non valid webrtc-star multiaddrs', () => {
    const ws = new WebRTCStar()
    const mhArr = [
      multiaddr('/libp2p-webrtc-star/ip4/127.0.0.1/tcp/9090/ws/ipfs/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo1'),
      multiaddr('/libp2p-webrtc-star/ip4/127.0.0.1/tcp/9090/ws/ipfs/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo2'),
      multiaddr('/libp2p-webrtc-star/ip4/127.0.0.1/tcp/9090/ws/ipfs/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo3'),
      multiaddr('/libp2p-webrtc-star/ip4/127.0.0.1/tcp/9090/ws/ipfs/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo4'),
      multiaddr('/ip4/127.0.0.1/tcp/9090/ws/ipfs/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo4'),
      multiaddr('/libp2p-webrtc-star/ip4/127.0.0.1/tcp/9090/ipfs/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo4')
    ]

    const filtered = ws.filter(mhArr)
    expect(filtered.length).to.equal(4)
  })
})
