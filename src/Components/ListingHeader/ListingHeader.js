import './ListingHeader.css';


export default function ListingHeader(props) {
  return (
    <>
    <div id='ListingContainer' style={{backgroundImage:`url(${props.url})`}}>
    <div id='ListingHWrapper'>
            {props.name}
    </div>
    </div>
    </>
  );
}
