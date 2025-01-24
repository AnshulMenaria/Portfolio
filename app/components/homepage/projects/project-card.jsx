import { useState } from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg border bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border-[#1b2c68a0] w-full"
    >
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          {/* Dynamic Content */}
          <div>
            <span className="text-pink-500">const</span>
            <span className="text-white"> Project = </span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 text-white">name:</span>
            <span className="text-amber-300">{` '${project.name}'`}</span>
          </div>
          {expanded && (
            <>
              <div>
                <span className="ml-4 lg:ml-8 text-white">tools:</span>
                <span className="text-gray-400"> [</span>
                {project.tools.map((tool, i) => (
                  <span key={i} className="text-amber-300">
                    {`${tool}${i < project.tools.length - 1 ? ', ' : ''}`}
                  </span>
                ))}
                <span className="text-gray-400"> ]</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">description:</span>
                <span className="text-cyan-400">{` '${project.description}'`}</span>
              </div>
            </>
          )}
          <div>
            <span className="text-gray-400">{'};'}</span>
          </div>
        </code>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-center text-blue-500 hover:underline"
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </motion.div>
  );
}

export default ProjectCard;
