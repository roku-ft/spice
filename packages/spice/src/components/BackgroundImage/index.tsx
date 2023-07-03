import s from "./spice.module.scss";

interface IBackgroundImage {
   ratio:
      | "golden"
      | "silver"
      | "platinum"
      | "16-9"
      | "square"
      | "3-2"
      | "4-3"
      | number;
   children: React.ReactNode;
   className?: string;
}

export const BackgroundImage = ({
   ratio,
   children,
   className,
}: IBackgroundImage) => {
   // Define the valid ratio types for better reusability and readability
   const validRatios = [
      "golden",
      "silver",
      "platinum",
      "16-9",
      "square",
      "3-2",
      "4-3",
   ];

   // Check if the ratio is valid only once and store the result
   let isRatio: boolean = validRatios.includes(ratio as string);
   let isNumber: boolean = typeof ratio === "number" && ratio > 0;

   // Throw an error and stop rendering if the ratio is not valid
   if (!isRatio && !isNumber) {
      throw new Error(
         `Invalid ratio value. The 'ratio' argument should be either ${validRatios.join(
            " | "
         )} or a number greater than 0.`
      );
   }

   return (
      <div className={`${s._bgImg_wrapper} ${className ? className : ""}`}>
         <div
            className={`${s._bgImg_view} ${
               isRatio ? s["_bgImg_" + ratio] : ""
            }`}
            style={isNumber ? { paddingTop: `${ratio}%` } : {}}>
            {children}
         </div>
      </div>
   );
};
