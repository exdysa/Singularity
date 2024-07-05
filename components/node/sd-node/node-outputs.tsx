import React from "react";
import { Position } from "reactflow";
import { NodeHandle } from "./node-handle";

interface Output {
  name: string;
  type: string;
}

interface NodeOutputsProps {
  data: Output[];
  selected: boolean;
}

const NodeOutputsComponent = ({ data, selected }: NodeOutputsProps) => {
  if (!data?.length) return <div />;
  return (
    <div className="flex-1">
      {data.map(({ name, type }, i) => (
        <NodeHandle
          key={i}
          slotType={type}
          label={name}
          type="source"
          position={Position.Right}
          isRequired
          selected={selected}
        />
      ))}
    </div>
  );
};

export const NodeOutputs = React.memo(NodeOutputsComponent);
