import './Skeleton.scss'
import { Card, BusyIndicator } from '@ui5/webcomponents-react';

interface CardDimensionProps {
  width: number,
  height: number
  busyIndicator?: boolean
}

function Skeleton(props: CardDimensionProps) {

  return (
    <div className="skeleton-placeholder" style={{ width: `${props.width}rem`, height: `${props.height}rem`}}>
      <BusyIndicator
            active={props.busyIndicator}
      /> 
    </div>
  )
}

export default Skeleton
