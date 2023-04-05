import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import "./TypeNode.css"

const handleStyle = { left: 10 };

function Oval({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} className="inputHandle" />
      <div className='circle'>
        <p>{data.name}</p>
      </div>
      <Handle type="source" position={Position.Bottom } id="a"  className="inputHandle" />
    </div>
  );
}

export default Oval;
