// import React from "react";
// import StringInput from "./StringInput";

// const SelectInput: IInput = (props) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [inputValue, setInputValue] = React.useState<string>(
//     props?.options?.find((option: IOption) => option.id === props?.value)
//       ?.name || ""
//   );
//   const [filteredOptions, setFilteredOptions] = React.useState<IOption[]>(
//     props?.options
//   );

//   const dropdownRef = React.useRef<HTMLDivElement | null>(null);

//   React.useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current?.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   React.useEffect(() => {
//     setFilteredOptions(props?.options);
//     setInputValue(
//       props?.options?.find((option: IOption) => option.id === props?.value)
//         ?.name || ""
//     );
//   }, [props.options]);

//   const handleOptionClick = (option: IOption) => {
//     props?.onChange({
//       target: {
//         name: props?.name,
//         value: option.id,
//       },
//     });
//     setInputValue(option.name);
//     setIsOpen(false);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setInputValue(value);

//     const filtered = props?.options.filter((option: IOption) =>
//       option.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredOptions(filtered);
//     setIsOpen(true);
//   };

//   // Helper function to highlight the matching part of the text
//   const highlightMatch = (optionName: string, inputValue: string) => {
//     const index = optionName.toLowerCase().indexOf(inputValue.toLowerCase());
//     if (index === -1 || !inputValue) return optionName; // If no match, return the full name
//     const beforeMatch = optionName.slice(0, index);
//     const matchText = optionName.slice(index, index + inputValue.length);
//     const afterMatch = optionName.slice(index + inputValue.length);

//     return (
//       <>
//         {beforeMatch}
//         <span className="font-bold">{matchText}</span>
//         {afterMatch}
//       </>
//     );
//   };

//   return (
//     <div className="relative w-full" ref={dropdownRef}>
//       <div onClick={() => setIsOpen(true)}>
//         <StringInput
//           name={props?.name}
//           placeholder={props?.placeholder || "Select an option"}
//           value={inputValue}
//           onChange={handleInputChange}
//           height={props?.height}
//           leftImage={props?.leftImage}
//           rightImage={
//             props?.rightImage === null
//               ? ""
//               : props?.rightImage || <Icon name="arrowDown" />
//           }
//           errorText={props?.errorText}
//           disabled={props.disabled}
//         />
//       </div>

//       {isOpen && (
//         <div
//           className={`absolute left-0 w-full mt-[0.5rem] rounded-[0.5rem] shadow-lg bg-white z-10 overflow-hidden scrollbar ${
//             props?.big ? "px-[0.5rem] py-[16px]" : "px-[2px] py-[6px]"
//           }`}
//         >
//           <div
//             className={`overflow-y-auto  ${
//               props?.big ? "px-[8px]" : "px-[4px]"
//             } ${props?.optionHeight || "max-h-48"}`}
//           >
//             <ul className="p-[2px] bg-white-50 flex flex-col gap-[2px] rounded-[8px]">
//               {filteredOptions?.length > 0 ? (
//                 filteredOptions?.map((option: IOption) => (
//                   <li
//                     key={option.id}
//                     className={`bg-white rounded-[8px] p-[12px] hover:bg-primary-50 hover:text-white cursor-pointer text-sm font-bold text-black font-normal ${
//                       option.name === props?.name ? "bg-grey-200 font-bold" : ""
//                     }`}
//                     onClick={() => handleOptionClick(option)}
//                   >
//                     {highlightMatch(option.name, inputValue)}
//                   </li>
//                 ))
//               ) : (
//                 <li className="p-[12px] text-sm font-normal text-black">
//                   No options found
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default React.memo(SelectInput);
