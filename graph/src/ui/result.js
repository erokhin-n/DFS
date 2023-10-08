import { useState, useEffect } from 'react';

const Result = ({ graph }) => {
	const [visitedNodes, setVisitedNodes] = useState(new Set());

	const checkGraph = (node) => {
		if (!visitedNodes.has(node)) {
			setVisitedNodes((prevSet) => new Set(prevSet).add(node));

			const neighbors = graph[node] || [];
			neighbors.forEach((neighbor) => {
				checkGraph(neighbor);
			});
		}
	};

	useEffect(() => {
		checkGraph(1);
	}, [graph]);

  return (
    <div style={{ marginTop: '25px' }}>
		<p>Result:</p>
		<ul>
			{[...visitedNodes].map((node) => (
				<li key={node}>{node}</li>
			))}
		</ul>
    </div>
  );
};

export default Result;
