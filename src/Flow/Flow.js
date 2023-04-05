import { useState,useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import Oval from '../TypeNode/Oval.js';

import { initialEdges, initialNodes } from './nodes-edges';


const nodeTypes = { oval: Oval };
let id = 0;
const getId = () => `dndnode_${id++}`;
    
const Flow = () => {
  
      
      const reactFlowWrapper = useRef(null);
      const [nodes, setNodes] = useState(initialNodes);
      const [edges, setEdges] = useState(initialEdges);
      const [reactFlowInstance, setReactFlowInstance] = useState(null);

      const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
      );
      const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
      );
      const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
      );
      const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      }, []);
      
      const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          const type = event.dataTransfer.getData('application/reactflow');
    
          // check if the dropped element is valid
          if (typeof type === 'undefined' || !type) {
            return;
          }
    
          const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
          });
          const newNode = {
            id: getId(),
            type,
            position,
            data: { label: `${type} node` },
          };
    
          setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
      );
    return ( <div style={{ width: '100%', height: window.innerHeight}}>
                <ReactFlow  className="reactflow-wrapper" ref={reactFlowWrapper}
                 nodes={nodes}
                 edges={edges}
                 onNodesChange={onNodesChange}
                 onEdgesChange={onEdgesChange}
                 onConnect={onConnect}
                 nodeTypes={nodeTypes}
                 onInit={setReactFlowInstance}
                 onDrop={onDrop}
                 onDragOver={onDragOver}
                 fitView>
                <Background />
                <Controls />
                </ReactFlow>
            </div>
            )
}
export default Flow;

