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
      <Item d={data.start} side="top" area="start" />
      <div className="row">
        <div className="column">
          {map(data.middle.macro, d => (
            <Item key={d.name} d={d} side="left" area="macro" />
          ))}
        </div>
        <div className="column">
          {map(data.middle.micro, d => (
            <Item key={d.name} d={d} side="right" area="micro" />
          ))}
        </div>
      </div>
      <Item d={data.end} side="bottom" area="end" />
    </div>
  </div>
)

const Item: React.FC<{
  d: Datum
  side: 'top' | 'bottom' | 'left' | 'right'
  area: 'start' | 'macro' | 'micro' | 'end'
}> = p => (
  <div className={classes('row', p.side, p.area)}>
    <div className="item">{p.d.name}</div>
  </div>
)
