import React from 'react';
import Marquee from "react-fast-marquee";
const Breakingnews = () => {
    return (
        <div>
            <Marquee pauseOnHover speed={100}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>
    );
};

export default Breakingnews;