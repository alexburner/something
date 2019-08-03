import React from 'react'

import { classes } from '../util/classes'
import { map } from '../util/loop'

interface Datum {
  name: string
}

const data = {
  start: { name: 'Big Bang' },
  middle: {
    macro: [
      { name: 'Cosmic Web' },
      { name: 'Galaxies' },
      { name: 'Stars' },
      { name: 'Planets' },
      { name: 'Terra' },
      { name: 'Flora' },
      { name: 'Fauna' },
      { name: 'Collectives' },
    ],
    micro: [
      { name: 'Fields' },
      { name: 'Particles' },
      { name: 'Atoms' },
      { name: 'Molecules' },
      { name: 'Biomolecules' },
      { name: 'Cells' },
      { name: 'Organs' },
      { name: 'Individuals' },
    ],
  },
  end: { name: 'Consciousness' },
}

export const Entities: React.FC = () => (
  <div className="entities">
    <div className="grid"></div>
    <div className="items">
      <div className="top">
        <Item d={data.start} />
      </div>
      <div className="middle row">
        <div className="left column">
          {map(data.middle.macro, d => (
            <Item key={d.name} d={d} />
          ))}
        </div>
        <div className="right column">
          {map(data.middle.micro, d => (
            <Item key={d.name} d={d} />
          ))}
        </div>
      </div>
      <div className="bottom">
        <Item d={data.end} />
      </div>
    </div>
  </div>
)

const Item: React.FC<{ d: Datum }> = p => (
  <div className="item">
    <div className="name">{p.d.name}</div>
    <div className="thumb"></div>
  </div>
)
