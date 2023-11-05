import './skeleton.scss'
import { BusyIndicator, Badge } from '@ui5/webcomponents-react';

interface CardDimensionProps {
  width: number,
  height: number
  busyIndicator?: boolean
}

function Skeleton(props: CardDimensionProps) {

  return (
    <Badge className="skeleton-placeholder" color-scheme="10" style={{ width: `${props.width}rem`, height: `${props.height}rem`}}>
      <BusyIndicator
            active={props.busyIndicator}
      /> 
    </Badge>
  )
}

export default Skeleton
