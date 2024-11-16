import React from 'react'
const Spinner: React.FC<ISpinner> = ({
  borderColor = "border-brown-100",
  height = "h-[1.5rem]",
  width = "w-[1.5rem]",
}) => {
  return (
    <span className="inline-flex justify-center items-center">
      <span
        className={`animate-spin rounded-full h-[1.5rem] w-[1.5rem] border-b-2 ${borderColor} ${height} ${width}`}
      />
    </span>
  );
};
export default React.memo(Spinner);
