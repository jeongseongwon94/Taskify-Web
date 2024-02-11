import React, { useEffect, useState } from 'react';

interface CloseSvgProps {
  width: number;
  height: number;
}

export default function CloseSvg({
  width,
  height,
}: CloseSvgProps): JSX.Element {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [responsiveWidth, setResponsiveWidth] = useState(isMobile ? 24 : width);
  const [responsiveHeight, setResponsiveHeight] = useState(
    isMobile ? 24 : height,
  );

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      setResponsiveWidth(newIsMobile ? 24 : width);
      setResponsiveHeight(newIsMobile ? 24 : height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, height]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={responsiveWidth}
      height={responsiveHeight}
    >
      <path
        d="M16 17.4051L9.23585 24.1692C9.05125 24.3538 8.8192 24.4482 8.53972 24.4525C8.26025 24.4568 8.02394 24.3624 7.83078 24.1692C7.6376 23.976 7.54102 23.7418 7.54102 23.4666C7.54102 23.1914 7.6376 22.9573 7.83078 22.7641L14.5949 16L7.83078 9.23585C7.64616 9.05125 7.55172 8.8192 7.54745 8.53972C7.54316 8.26025 7.6376 8.02394 7.83078 7.83078C8.02394 7.6376 8.25812 7.54102 8.53332 7.54102C8.80852 7.54102 9.04269 7.6376 9.23585 7.83078L16 14.5949L22.7641 7.83078C22.9487 7.64616 23.1808 7.55172 23.4602 7.54745C23.7397 7.54316 23.976 7.6376 24.1692 7.83078C24.3624 8.02394 24.4589 8.25812 24.4589 8.53332C24.4589 8.80852 24.3624 9.04269 24.1692 9.23585L17.4051 16L24.1692 22.7641C24.3538 22.9487 24.4482 23.1808 24.4525 23.4602C24.4568 23.7397 24.3624 23.976 24.1692 24.1692C23.976 24.3624 23.7418 24.4589 23.4666 24.4589C23.1914 24.4589 22.9573 24.3624 22.7641 24.1692L16 17.4051Z"
        fill="black"
      />
    </svg>
  );
}
